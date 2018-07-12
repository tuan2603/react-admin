import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import { setupTimeOut} from './utils/storage';

class App extends Component {

    componentWillMount() {
        setupTimeOut();
    }

    render() {
        return (
            <Router>
                <main>
                    <Routes />
                </main>
            </Router>
        );
    }
}

export default App;
