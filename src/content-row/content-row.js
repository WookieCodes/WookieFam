import React, {Component} from 'react'
import {} from './content-row.css'
import ContentText from '../content-text/content-text';
import ContentImg from '../content-img/content-img';

/*
Props:
        order = Number (1 or 2) => decides which order the content is displayed
        title = String => Title of the content box
        text = String => Description of this content box
        imgPath = String => path to image for this content row (image should be square)
*/

export default class ContentRow extends Component {
    constructor(props) {
        super(props);

        // Bind 
        this.CreateContentRow = this.CreateContentRow.bind(this);
    }

    CreateContentRow = () => {

        return(
            <div className="row">
                <ContentText order={this.props.order} title={this.props.title} text={this.props.text} link={this.props.link}/>
                <ContentImg id={this.props.id} order={this.props.order} imgPath={this.props.imgPath} link={this.props.link}/>
            </div>
        );
    }

    render() {
        return(
            <div>
                {this.CreateContentRow()}
            </div>
        );
    };
};