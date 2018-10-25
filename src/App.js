import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';

class App extends Component {
  constructor(props) {
    super(props)  

    this.state = { 
      socket: io('http://localhost:3001'),
      result: []
    }
  }

  componentDidMount() {
    const { socket } = this.state

    socket.on('status', data => {
      console.log(data)
    })

    socket.on('people', result => {
      this.setState({result: this.state.result.concat(result.new_val)})
    })
  }

  render() {
    const { result, socket } = this.state

    return (
      <div className="App">
        <header className="App-header">
        {result.map((r, i) => ( <span key={i}>{r.name}, {r.age} years old, {r.distance}km distance</span> ))}
        </header>
      </div>
    );
  }

}

export default App;
