declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');
import { HashRouter as Router, BrowserRouter , Route, Switch } from 'react-router-dom';
import 'react-smart-data-table/dist/react-smart-data-table.css'
import ScenicSpotCity from './scenicSpot/city'
import ScenicSpot from './scenicSpot/all'
import Intro from './scenicSpot/intro'
import NavBar from './scenicSpot/navBar'
import RateLimitTest from './view/rateLimitTest'

const Routes = () => (
    <Switch>
        <Route path="/rateLimitTest">
            <RateLimitTest />
        </Route>
        <Route path="/scenicSpot/:city">
            <ScenicSpotCity />
        </Route>
        <Route path="/scenicSpot">
            <ScenicSpot />
        </Route>
        <Route path="/">
            <Intro />
        </Route>
    </Switch>
);
export class App extends React.Component {   
    render() {
        return (
            <Router>
                <div>
                    <NavBar></NavBar>
                    <Routes />
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render((
//    <Router>
//        <Switch>
            
//            <Route exact path="/scenicSpot/:city" component={ScenicSpotCity} />
//            <Route exact path="/" component={App} />
//        </Switch>
//    </Router>
//),
//    document.getElementById('root')
//);