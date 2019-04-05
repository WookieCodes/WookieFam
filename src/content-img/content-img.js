import React, {Component} from 'react'
import {} from './content-img.css'

/*
Notes: Must always be within ContentRow

Props:
        order = Number (1 or 2) => assigns the opposite order value of ContentText
        imagePath = String => path to image for the row
*/

export default class ContentImg extends Component {
    constructor(props) {
        super(props);

        //Bind 
        this.GetOrder = this.GetOrder.bind(this);
    }

    GetOrder = () => {
        return ((this.props.order === 1) ? "order-2" : "order-1");
    }

    imageHasLink = () => {
        return ((this.props.link) ? true : false);
    }

    generateImage = () => {
        if (this.imageHasLink()) {
            return (<a href={this.props.link.url} target="_blank" rel="noopener noreferrer"><img id={this.props.id} src={this.props.imgPath} alt={this.props.title}/></a>);
        } else {
            return (<img id={this.props.id} src={this.props.imgPath} alt={this.props.title}/>);
        }
    }

    render() {
        return(
            <div className={"content-row-image col-6 " + this.GetOrder()}>
                {this.generateImage()}
            </div>
        );
    };
};