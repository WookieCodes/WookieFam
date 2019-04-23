import React, { Component } from 'react'
// import { Link } from 'react-router-dom';

import TopNav from "../navbar/navbar";
// import LinkList from '../link-list/link-list';
// import TitleChanging from '../title-changing/title-changing';
import ContentRow from '../content-row/content-row';
import Particles from 'react-particles-js';

import { mySites } from '../App';
import { } from './stream-page.css'

export default class StreamPage extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const particlesSettings = {
            "particles": {
                "number": {
                    "value": 69,
                    "density": {
                        "enable": false,
                        "value_area": 1690
                    }
                },
                "color": {
                    "value": "#f5f5f5"
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
                    "value": 0.5,
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
                    "color": "#f5f5f5",
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
        return (
            <div>
                <section className="stream-intro-section-wrapper">
                    <div className="stream-intro-section container">
                        <Particles canvasClassName="canvas-stream ParticleCanvas" params={particlesSettings} />
                        <TopNav brand="Wookie" sites={mySites} theme="dark"></TopNav>
                        <div className="row mt-5">
                            <div className="left-col col-md-8 align-self-center">
                                    <div className="twitch-embed-wrapper">
                                            <div className="row justify-content-center p-1">
                                                <div className="col-12">
                                                    <h2>Check out my stream!</h2>
                                                    <p>Make sure to follow me on <a href="https://www.twitch.tv/wookie">Twitch</a> to get notified when I go live!</p>
                                                </div>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div className="col-12 mt-3">
                                                    <div id="twitch-frame-div" className="embed-responsive embed-responsive-16by9">
                                                        <iframe title="twitch-player" className="embed-responsive-item" src="https://player.twitch.tv/?channel=thethingssheplays" allowFullScreen={true}></iframe>
                                                    </div>
                                                </div>
                                                {/* <div className="col-2 pl-0">
                                                    <iframe className="embed-responsive-item w-100 h-100 border-0" src="https://www.twitch.tv/embed/wookie/chat?darkpopout"></iframe>
                                                </div> */}
                                            </div>
                                    </div>
                                </div>
                            <div className="col-md-4">
                                <img id="main-pic" src="/assets/gumWallPic.png" alt="Wookie" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="stream-info-section">
                    <ContentRow order={2}
                        title="Community"
                        text="I've built a nice community of people that support and care for each other, while also always giving each other a hard time. Come hang out in stream sometime and let's get to know each other!"
                        imgPath="/assets/TC-Group-Square.jpeg"
                        link={[{ title: "Join the Discord!", url: 'https://discord.gg/wookieforc3' }]} />
                    <ContentRow order={1}
                        title='Games'
                        text="I stream a variety of games, but lately most of them are shooters. I play: Fortnite, Destiny 2, Overwatch, Apex Legends, Beat Saber, Pok&eacute;mon Go and many more!"
                        imgPath='/assets/VG-Event.jpeg' />
                    <ContentRow order={2}
                        title='Charity'
                        text="I enjoy using my platform to help others when I can. So far, my community has come together to raise over $5,000 for charities and other good causes."
                        imgPath='/assets/ExtraLifeLogo.jpg'
                        link={[
                                { title: "Learn about Extra Life", url: "https://www.extra-life.org/"},
                                { title: "Learn about St. Jude", url: "https://www.stjude.org/get-involved/other-ways/video-game-charity-event.html"}
                            ]} />
                    <ContentRow order={1}
                        id="emotes"
                        title='Support'
                        text="If you would like to support me and the content I create, consider subscribing to my Twitch channel! Perks include: 12+ emotes to use all over Twitch, ad-free viewing of my stream, custom subscriber badge in chat, unique role in Discord, and my undying love <3"
                        imgPath='/assets/Emotes.png' 
                        link={[{ title: "Subscribe today!", url: "https://subs.twitch.tv/wookie"}]}/>
                    <ContentRow order={2}
                        title="Merch"
                        text="Wanna rep the Wookie Fam? Get yourself a t-shirt, hoodie, backpack, and more!"
                        imgPath="/assets/MerchTshirt.png"
                        link={[{ title: "Shop Merch", url: 'https://streamlabs.com/wookie2/#/merch' }]} />
                </section>
            </div>
        );
    };
};