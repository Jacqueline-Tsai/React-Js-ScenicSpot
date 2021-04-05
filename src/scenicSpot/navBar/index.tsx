declare var require: any
var React = require('react');
import './style.css'

export class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedItem: 0,
            item: [0, 1, 2, 3],
            url: ['/#/', '/#/scenicSpot', '/#/scenicSpot/Taipei', '/#/rateLimitTest'],
            title: ['Introduction', 'All Scenic Spot', 'City Scenic Spot', 'Rate Limit Test']
        }
    }
    render() {
        let dom = this.state.item.map((idx) => 
            <li><a href={this.state.url[idx]}>{this.state.title[idx]}</a></li>)
        return (
            <ul>
                {dom}
            </ul>
        );
    }
}

export default NavBar