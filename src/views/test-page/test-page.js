<<<<<<< HEAD
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
=======
import React, { Component } from 'react';

class List extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/getList')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }

  render() {
    const { list } = this.state;

    return (
      <div className="App">
        <h1>List of Items</h1>
        {/* Check to see if any items are found*/}
        {list.length ? (
          <div>
            {/* Render the list of items */}
            {list.map((item) => {
              return(
                <div>
                  {item}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default List;
>>>>>>> f9d45ee3f4bbf2a36f899e13c311b5775abd308d
