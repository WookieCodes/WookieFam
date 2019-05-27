import React, {Component} from 'react'
import {} from './home-page.css'
import TopNav from "../navbar/navbar";
import LinkList from '../link-list/link-list';
import TitleChanging from '../title-changing/title-changing';
import ContentRow from '../content-row/content-row';
import Particles from 'react-particles-js';

import { mySocials, mySites, particlesSettings } from '../App';

export default class HomePage extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const titleWords = ["plays", "streams", "codes", "laughs", "throws", "noms", "trolls", "dances", "fails"];

        return (
            <div className="home-page">
                <section className="intro-section-wrapper">
                    <div className="intro-section container">
                        <Particles canvasClassName="canvas ParticleCanvas" params={particlesSettings} />
                        <TopNav brand="Wookie" sites={mySites} theme="dark"></TopNav>
                        <div className="row mt-5">
                            <div className="left-col col-md-8 align-self-center">
                                <div>
                                    <TitleChanging left="Wookie" words={titleWords}/>
                                    <LinkList className="col-md-6 offset-md-1 float-left justify-content-start" links={mySocials} bkgdColor="#00020E" iconColor="#F5F5F5" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img id="main-pic" src="/assets/gumWallPic.png" alt="Wookie" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="info-section-wrapper">
                    <div className="info-section">
                        <ContentRow order={2}
                            title="Who am I?"
                            text="Hey I'm Nishok, but most people call me Wookie! I'm a gamer, streamer, web developer, nerd, foodie, movie lover, and a whole lot more."
                            imgPath="/assets/SnowboardingPic-Square.jpeg" />

                        <ContentRow order={1}
                            id="emotes"
                            title='Want to support me?'
                            text='The best way to support me is with a monthly subscription to my Twitch stream! They start at $4.99/month and unlock exclusive perks for my channel!'
                            imgPath='/assets/Emotes.png'
                            link={[{ title: "Subscribe on Twitch!", url: 'https://subs.twitch.tv/wookie' }]} />
                        <ContentRow order={2}
                            title='Need a new website?'
                            text="I'm a full stack web-developer who likes to focus on making eye-catching websites for people. Get in touch with me if you're looking for a website!"
                            imgPath='/assets/coding.jpeg'
                            link={[{ title: "Check out my portfolio", url: 'https://www.nishok.io' }]} />
                    </div>
                </section>
            </div>
        );
    };
};