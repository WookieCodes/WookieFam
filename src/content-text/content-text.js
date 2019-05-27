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
            const links = this.props.link.map( (obj) => {
                return (
                    <div key={obj.title}>
                        <a className="btn btn-info mb-2" href={obj.url} target="_blank" rel="noopener noreferrer">{obj.title}</a>
                    </div>
                )});

            return links;
        }
    }

    render() {
        return(
            <div className={"cr-text col-6 align-self-center p-3 " + this.GetOrder()}>
                <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
                <br></br>
                {this.DisplayLink()}
            </div>
        );
    };
};