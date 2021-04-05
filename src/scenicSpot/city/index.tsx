declare var require: any

var React = require('react');
import { useLocation } from 'react-router-dom';
import ScenicSpot from '../all'
import './style.css'

export class ScenicSpotCity extends React.Component {
    constructor() {
        super();
        this.state = {
            city: "",
            render: false
        };
    }
    changeTmp = (e) => {
        this.setState({ city: e.target.value });
    }
    usePathname = () => {
        const location = useLocation();
        return location.pathname;
    }
    click = () => {
        let url = window.location.origin + "/#/scenicSpot/" + this.state.city
        console.log(url)
        window.open(url, "_blank");
    }
    render() {
        if(!this.state.render) {
            this.setState({city: window.location.href.split('/')[5]})
            this.setState({render: true})
        }
        return (
            <div>
                <form>
                    <label>
                        City :
                        <input type="text" value={this.state.city} onChange={this.changeTmp}/>
                    </label>
                    <button onClick={this.click}><a>submit </a></button> 
                </form>
                <ScenicSpot city={this.state.city}></ScenicSpot>
            </div>
            )
    }
}

export default ScenicSpotCity
