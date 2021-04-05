declare var require: any
var React = require('react');
import './style.css'

export class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedItem: 0,
            item: [0, 1],
            url: ['/#/scenicSpot', '/#/scenicSpot/Taipei'],
            title: ['All', 'City']
        }
    }
    render() {
        let dom = this.state.item.map((idx) => {
            if (idx == this.state.selectedItem) return <li><a className="active" href={this.state.url[idx]}>{this.state.title[idx]}</a></li>
            else return <li><a href={this.state.url[idx]}>{this.state.title[idx]}</a></li>
        })
        return (
            <ul>
                {dom}
            </ul>
        );
    }
}

export default NavBar