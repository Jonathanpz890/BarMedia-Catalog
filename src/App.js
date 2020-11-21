import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from './components/Main.js';

class App extends Component {
    render() {
        return(
            <Router basename='/catalog'>
                <Route exact path='/' component={Main} />
                <Route exact path='/:path' component={Main} />
                <Route exact path='/face-sculpture' component={Main} />
            </Router>
        )
    }
}
export default App;