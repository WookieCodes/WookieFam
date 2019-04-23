import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// Components
import LinkList from './link-list/link-list';
import HomePage from './home-page/home-page';
import StreamPage from './stream-page/stream-page';

export const mySocials = [
    { name: "twitch", url: "https://www.twitch.tv/wookie" },
    { name: "discord", url: "https://discord.gg/wookieforc3" },
    { name: "twitter", url: "https://www.twitter.com/wookieforc3" },
    { name: "instagram", url: "https://www.instagram.com/wookieforc3" },
    { name: "github", url: "https://www.github.com/wookiecodes" }
];

        // var mySites = [
        //     { name: "subscribe", url: "https://subs.twitch.tv/wookie" },
        //     { name: "github", url: "https://www.github.com/wookiecodes" },
        //     { name: "merch", url: "https://www.designbyhumans.com/shop/WForc3/" },
        //     { name: "SubPage", url: "#" }
        // ];
export const mySites = [
    { name: "Stream", url: "/stream" },
    { name: "Dev", url: "/dev" },
    { name: "Connect", url: "/connect" }
]




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

                    <section className="footer-wrapper">
                        <div className="footer row">
                            <div className="col-12 align-self-center">
                                <p>Developed by Wookie</p>
                                <LinkList links={mySocials} bkgdColor="#6441A4" iconColor="#f5f5f5" />
                            </div>
                        </div>
                    </section>
                </div>

            </Router>
        );
    }
}

export default App;
