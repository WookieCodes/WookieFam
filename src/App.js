import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// Components
import HomePage from './home-page/home-page';
import StreamPage from './stream-page/stream-page';

class App extends Component {
    TestPage = () => {
        return <h1>This is a test page.</h1>
    }



    render() {
        return (
            <Router>
                <div className="App">
                    

                    <Route path="/" exact component={HomePage}/>
                    <Route path="/stream" component={StreamPage}/>
                    {/* <Route path="/dev" component={App}/>
                    <Route path="/connect" component={App}/> */}
                </div>

            </Router>
        );
    }
}

export default App;
