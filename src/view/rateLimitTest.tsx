declare var require: any
const axios = require('axios');
var React = require('react');

export class RateLimitTest extends React.Component {
    constructor() {
        super();
        this.state = {
            res: ""
        }
    }
    request(){
        axios.get('http://localhost:3000/api/test')
        .then((res) => {
            console.log(res)
        }).catch((err) => {
            console.error(err)
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.request}>Request</button>
                <h1>Res</h1>
                {this.state.res}
            </div>
        );
    }
}

export default RateLimitTest