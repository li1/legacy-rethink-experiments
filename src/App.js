import React, { Component } from 'react';
import './App.css';
import UsersGridList from "./UsersGridList";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <UsersGridList classes={UsersGridList.props}/>
                         {
                           //result.map((user) => <li>{user.name} ({user.locations.current.distance} km away)</li>)
                         }
                </header>
            </div>
        );
    }

}

export default App;
