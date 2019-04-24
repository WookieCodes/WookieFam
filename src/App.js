import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// Components
import LinkList from './link-list/link-list';
import HomePage from './home-page/home-page';
import StreamPage from './stream-page/stream-page';
import DevPage from './dev-page/dev-page';

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

export const particlesSettings = {
    "particles": {
        "number": {
            "value": 69,
            "density": {
                "enable": false,
                "value_area": 1690
            }
        },
        "color": {
            "value": "#00020e"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 12,
                "size_min": 2,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 169,
            "color": "#62d5ff",
            "opacity": 0.6,
            "width": 0.9
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 1200,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": false,
                "mode": "bubble"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 169,
                "line_linked": {
                    "opacity": 0.8
                }
            },
            "bubble": {
                "distance": 169,
                "size": 10,
                "duration": 1,
                "opacity": 0.8,
                "speed": 5
            },
            "repulse": {
                "distance": 90,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
};

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
                    <Route path="/dev" component={DevPage}/>
                    {/* <Route path="/connect" component={App}/>  */}

                    <section className="footer-wrapper">
                        <div className="footer row">
                            <div className="col-12 align-self-center">
                                <p>Developed by Wookie</p>
                                <LinkList links={mySocials} bkgdColor="#62d5ff" iconColor="#00020e" />
                            </div>
                        </div>
                    </section>
                </div>

            </Router>
        );
    }
}

export default App;
