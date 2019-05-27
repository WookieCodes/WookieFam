import React, {Component} from 'react'
import {} from './dev-page.css'
import Particles from 'react-particles-js';
import TopNav from "../navbar/navbar";
import { mySites } from '../App';
import TitleChanging from '../title-changing/title-changing';
import { particlesSettings } from '../App'

export default class DevPage extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const titleWords = ["HTML", "CSS", "JS", "React", "Node.js"];

        return(
            <div className="dev-page">
                <section className="intro-section-wrapper">
                    <div className="intro-section container">
                        <Particles canvasClassName="canvas ParticleCanvas" params={particlesSettings} />
                        <TopNav brand="Wookie" sites={mySites} theme="dark"></TopNav>
                        <div className="row mt-5">
                            <div className="left-col col-md-8 align-self-center">
                                <div>
                                    <TitleChanging left="I know" words={titleWords} />
                                    <div className="row">
                                        <div className="col-6"></div>
                                        <div className="col-6 text-left">
                                            <a id="portfolio-link" href="https://www.nishok.io">Click here for my portfolio</a>
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
            </div>
        );
    };
};