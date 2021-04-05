'use strict';
var path = require('path');
var express = require('express');
var mongoose = require('mongoose')
var config = require('./config/db')
var ReqNum = require('./model/reqNum')
var RequestIp = require('@supercharge/request-ip')
var moment = require('moment')
//var rateLimit = require('express-rate-limit')

var app = express()

mongoose.connect(config.mongodb)
mongoose.Promise = global.Promise

var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

app.set('port', process.env.PORT || 3000);
app.set('trust proxy', true)

/*const limiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 1000
})
app.use(limiter)*/

app.use('/', function (req, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    let userIp = RequestIp.getClientIp(req)
    ReqNum.find({ip:userIp}).then(res => {
        let setNum = 1
        let date = Date.now(), reset = moment(date).add(24, 'h').toDate()
        if(res.length > 0){
            date = res[0].created_at
            for(let i=0;i<res.length;i++){
                setNum += res[i].reqNum
            }
            if(reset < Date.now()){ //reset
                setNum = 1
            }
            if(setNum > 1000){
                return res.status(429).send('Too Many Requests');
            }else{
                ReqNum.deleteMany({ ip:userIp }).then(res => {
                    ReqNum.updateOne({ ip:userIp } , { '$set': { reqNum: setNum }}).then()
                    .catch(err => {console.log(err)})
                }).catch(err => {console.log(err)})
            }
        }
        ReqNum.create({ip:userIp, reqNum: setNum, created_at:date}).then()
        .catch(err => {console.log(err)})
        response.set({'X-RateLimit-Remaining': 1000 - setNum}); 
        response.set({'X-RateLimit-Reset': reset });
        next()
    }).catch(err => {
        console.log(err)
    })
});

app.get('/api', function (req, res, next) {
    console.log(`listening happy`)
    res.json('Hello Express!')
});

app.listen(app.get('port'), function () {
    console.log(`listening on port`)
});

module.exports = app