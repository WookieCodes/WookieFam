import React, { Component } from 'react'
// import { Link } from 'react-router-dom';

import TopNav from "../../components/navbar/navbar";
// import LinkList from '../link-list/link-list';
// import TitleChanging from '../title-changing/title-changing';
import ContentRow from '../../components/content-row/content-row';
import Particles from 'react-particles-js';

import { mySites, particlesSettings } from '../../App';
import { } from './stream-page.css'

export default class StreamPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    render() {
        return (
            <div className="stream-page">
                <section className="intro-section-wrapper">
                    <div className="intro-section container">
                        <Particles canvasClassName="canvas ParticleCanvas" params={particlesSettings} />
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
                                                        <iframe title="twitch-player" className="embed-responsive-item" src="https://player.twitch.tv/?channel=wookie" allowFullScreen={true}></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            <div className="col-md-4">
                                <img id="main-pic" src="/assets/gumWallPic.png" alt="Wookie" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="info-section">
                    <ContentRow order={2}
                        title="Community"
                        text="I've built a nice community of people that support and care for each other, while also always giving each other a hard time. Come hang out in stream sometime and let's get to know each other!"
                        imgPath="/assets/TC-Group-Square.jpeg"
                        link={[{ title: "Join the Discord!", url: 'https://discord.gg/wookieforc3' }]} />
                    <ContentRow order={1}
                        title='Games'
                        text="I stream a variety of games, but lately most of them are shooters. I play: League of Legends, Fortnite, Destiny 2, Overwatch, Apex Legends, Beat Saber, Pok&eacute;mon Go and many more!"
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