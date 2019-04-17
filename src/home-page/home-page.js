import React, {Component} from 'react'
import {} from './home-page.css'
import TopNav from "../navbar/navbar";
import LinkList from '../link-list/link-list';
import Title from '../title-changing/title-changing';
import ContentRow from '../content-row/content-row';
import Particles from 'react-particles-js';

export default class HomePage extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {               
         // var mySites = [
        //     { name: "subscribe", url: "https://subs.twitch.tv/wookie" },
        //     { name: "github", url: "https://www.github.com/wookiecodes" },
        //     { name: "merch", url: "https://www.designbyhumans.com/shop/WForc3/" },
        //     { name: "SubPage", url: "#" }
        // ];
        var mySites = [
            { name: "Stream", url: "/stream"},
            { name: "Dev", url: "/dev"},
            { name: "Connect", url: "/connect"}
        ]

        var mySocials = [
            { name: "twitch", url: "https://www.twitch.tv/wookie" },
            { name: "discord", url: "https://discord.gg/wookieforc3" },
            { name: "twitter", url: "https://www.twitter.com/wookieforc3" },
            { name: "instagram", url: "https://www.instagram.com/wookieforc3" },
            { name: "github", url: "https://www.github.com/wookiecodes" }
        ];

        var particlesSettings = {
            "particles": {
                "number": {
                    "value": 69,
                    "density": {
                        "enable": false,
                        "value_area": 1690
                    }
                },
                "color": {
                    "value": "#6441a4"
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
                    "color": "#6441a4",
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
            <div className="home-page">
                <section className="intro-section-wrapper">
                    <div className="intro-section container">
                        <Particles canvasClassName="ParticleCanvas" params={particlesSettings} />
                        <TopNav brand="Wookie" sites={mySites}></TopNav>
                        <div className="row mt-5">
                            <div className="left-col col-md-8 align-self-center">
                                <div>
                                    <Title />
                                    <LinkList className="col-md-6 offset-md-1 float-left justify-content-start" links={mySocials} bkgdColor="#F5F5F5" iconColor="#2A2D32" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img id="main-pic" src="/assets/gumWallPic.png" alt="Wookie" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="twitch-embed-wrapper">
                    <div className="container-fluid">
                        <div className="row justify-content-center py-5">
                            <div className="col-6">
                                <h2>Check out my stream!</h2>
                                <p>Make sure to follow me on <a href="https://www.twitch.tv/wookie">Twitch</a> to get notified when I go live!</p>
                            </div>
                        </div>
                        <div className="row justify-content-center pb-5">
                            <div className="col-6 pr-0">
                                <div id="twitch-frame-div" className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://player.twitch.tv/?channel=thethingssheplays" allowFullScreen={true}></iframe>
                                </div>
                            </div>
                            <div className="col-2 pl-0">
                                <iframe className="embed-responsive-item w-100 h-100 border-0" src="https://www.twitch.tv/embed/wookie/chat?darkpopout"></iframe>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-me-wrapper">
                    <div className="about-me">
                        <ContentRow order={2}
                            title="Who am I?"
                            text="Hey I'm Nishok, but most people call me Wookie! I'm a gamer, streamer, web developer, nerd, foodie, movie lover, and a whole lot more."
                            imgPath="/assets/SnowboardingPic-Square.jpeg" />
                        <ContentRow order={1}
                            title='Games'
                            text="I'm stream a variety of games, but lately most of them are shooters. I play: Fortnite, Destiny 2, Overwatch, Apex Legends, Beat Saber, Pok&eacute;mon Go and many more!"
                            imgPath='/assets/VG-Event.jpg' />
                        <ContentRow order={2}
                            title="Community"
                            text="I've built a nice community of people that support and care for each other, while also always giving each other a hard time. Come hang out in stream sometime and let's get to know each other!"
                            imgPath="/assets/TC-Group-Square.jpeg"
                            link={{ title: "Join the Discord!", url: 'https://discord.gg/wookieforc3' }} />
                        <ContentRow order={1}
                            id="emotes"
                            title='Want to support me?'
                            text='The best way to support me is with a monthly subscription to my Twitch stream! They start at $4.99/month and unlock exclusive perks for my channel!'
                            imgPath='/assets/Emotes.png'
                            link={{ title: "Subscribe on Twitch!", url: 'https://subs.twitch.tv/wookie' }} />
                        <ContentRow order={2}
                            title='Need a new website?'
                            text="I'm a full stack web-developer who likes to focus on making eye-catching websites for people. Get in touch with me if you're looking for a website!"
                            imgPath='/assets/coding.jpeg'
                            link={{ title: "DM me on Twitter", url: 'https://www.twitter.com/wookieforc3' }} />
                    </div>
                </section>
                <section className="footer-wrapper">
                    <div className="footer row">
                        <div className="col-12 align-self-center">
                            <p>Developed by Wookie</p>
                            <LinkList links={mySocials} bkgdColor="#6441A4" iconColor="#f5f5f5" />
                        </div>
                    </div>
                </section>
            </div>
        );
    };
};