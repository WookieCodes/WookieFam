import React, {Component} from 'react'
import {} from './content-text.css'

/*
Notes: Must always be within ContentRow

Props:
        title = String => Title of the content box
        text = String => Description of this content box
*/

export default class ContentText extends Component {
    constructor(props) {
        super(props);

        //Bind
        this.GetOrder = this.GetOrder.bind(this);
    }

    GetOrder = () => {
        return ((this.props.order === 1) ? "order-1" : "order-2");
    }

    DisplayLink = () => {
        if (this.props.link) {
            return (
                <div>
                    <br></br>
                    <a href={this.props.link.url} target="_blank" rel="noopener noreferrer">{this.props.link.title}</a>
                </div>
            )
        }
    }

    render() {
        return(
            <div className={"content-row-text col-6 align-self-center " + this.GetOrder()}>
                <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
                {this.DisplayLink()}
            </div>
        );
    };
};