declare var require: any

var React = require('react');
import ScrollHandler from '../scrollHandler'
const axios = require('axios');
import jsSHA from 'jssha'

const getAuthorizationHeader = function () {
    var AppID = '717eef0bc4e9430a87c7fb3a992cf2a3';
    var AppKey = 'Hj1sic5532pha6fCWXviFIv_WSg';
    var GMTString = new Date().toUTCString();
    var ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    var HMAC = ShaObj.getHMAC('B64');
    var Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
    return { 'Authorization': Authorization, 'X-Date': GMTString };
}

export class ScenicSpot extends React.Component {
    constructor() {
        super();
        this.state = {
            stop: false,
            render: false,
            data: [],
            city: 'Taipei'
        };
    }
    api(self) {
        if (self.state.stop == true) return
        self.setState({ stop: true })
        let city = self.props.city ? String(self.props.city) : ""
        let url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/' + city + '?$top=30&$skip=' + String(self.state.data.length) + '&$format=JSON'
        console.log(url)
        axios.get(url, {
            headers: getAuthorizationHeader(),
        }).then(function (response) {
            let tmp = response.data
            if (!self.state.data || self.state.data.length == 0) self.state.data = tmp
            else {
                for (let i = 0; i < tmp.length; i++) self.state.data.push(tmp[i])
            }
            self.setState({ render: true })
            if (tmp.length >= 30) self.setState({ stop: false })
        });
    }
    render() {
        if (!this.state.render) this.api(this)
        let renderContainer = <div>loading</div>
        if (this.state.render == true) {
            let table = this.state.data.map((datum) => <tr><td>{datum.Name}</td><td>{datum.Description}</td><td>{datum.Address}</td><td>{datum.OpenTime}</td></tr>)
            renderContainer =
                <div>
                    <ScrollHandler height={window.innerHeight} onScrollBottom={this.api} parent={this} content={
                        <table className="w3-table-all w3-hoverable" >
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Address</th>
                                    <th>OpenTime</th>
                                </tr>
                            </thead>
                            <tbody >
                                {table}
                            </tbody>
                        </table>}>
                    </ScrollHandler>
                </div>
        }
        return renderContainer
    }
}

export default ScenicSpot
