const mongoose = require('mongoose')

const reqNum = mongoose.Schema({
  ip: String,
  reqNum: Number,
  created_at: { type: Date, default: Date.now }
})

var ReqNum = module.exports = mongoose.model('reqNum', reqNum)
