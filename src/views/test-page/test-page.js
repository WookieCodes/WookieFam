import React, {Component} from 'react'

export default class TestPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.getSubs();
    }

    getSubs = () => {
        fetch('/add/user')
        .then(res => res.json())
        .then(users => {
            this.setState(users)
        });
    }

    render() {
        const {users} = this.state;

        return(
            <div>
                {users.length ? (
                    <div>
                        {users.map(user => {
                            return (
                                <div>
                                    {user}
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <div>
                        <h2>Empty list</h2>
                    </div>
                )}
            </div>
        );
    };
};