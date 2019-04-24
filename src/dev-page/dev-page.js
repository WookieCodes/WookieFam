import React, {Component} from 'react'
import {} from './dev-page.css'
import Particles from 'react-particles-js';
import TopNav from "../navbar/navbar";
import { mySites } from '../App';
import LinkList from '../link-list/link-list';
import TitleChanging from '../title-changing/title-changing';
import { mySocials, particlesSettings } from '../App'

export default class DevPage extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const titleWords = ["plays", "streams", "codes", "laughs", "throws", "noms", "trolls", "dances"];

        return(
            <div className="dev-page">
                <section className="intro-section-wrapper">
                    <div className="intro-section container">
                        <Particles canvasClassName="canvas ParticleCanvas" params={particlesSettings} />
                        <TopNav brand="Wookie" sites={mySites} theme="dark"></TopNav>
                        <div className="row mt-5">
                            <div className="left-col col-md-8 align-self-center">
                                <div>
                                    <TitleChanging words={titleWords} />
                                    {/* <LinkList className="col-md-6 offset-md-1 float-left justify-content-start" links={mySocials} bkgdColor="#00020e" iconColor="#F5F5F5" /> */}
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