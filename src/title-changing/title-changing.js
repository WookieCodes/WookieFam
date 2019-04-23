import React, {Component} from 'react'
import {} from './title-changing.css'

export default class TitleChanging extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            words: this.props.words,
            index: 0
        }

        this.incrementIndex = this.incrementIndex.bind(this);
        this.changeWord = this.changeWord.bind(this);

        setInterval(this.incrementIndex, 5000);
    }

    incrementIndex = () => {
        this.setState({index: (this.state.index + 1) % this.state.words.length});
    }

    getId = () => {
        const id = Math.floor((Math.random() * 100) + 1);
        return id;
    }

    changeWord = () => {
        const newTitle = (
        <div className="col-sm-6 px-1">
            <h1 key={this.getId()} id="right-title" className="run-anim">{this.state.words[this.state.index]}</h1>
        </div>);
        
        return newTitle;
    }

    render() {
        return(
            <div className="title row d-flex">
                <div className="col-sm-6 px-1">
                    <h1 id="left-title">Wookie</h1>
                </div>
                {this.changeWord()}
            </div>
        );
    };
};