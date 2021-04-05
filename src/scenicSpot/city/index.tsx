declare var require: any

var React = require('react');
import ScenicSpot from '../all'

export class ScenicSpotCity extends React.Component {
    constructor() {
        super();
        this.state = {
            city: "Taipei",
        };
    }
    render() {
        return (
            <ScenicSpot city={this.state.city}></ScenicSpot>
            )
    }
}

export default ScenicSpotCity
