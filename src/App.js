import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); 

    this.state = { 
      monsters: [ 
        {
          name: 'Frankenstein',
          id: 'a1b2c'
        },
        {
          name: 'Dracula',
          id: 'a2c3d'
        },
        {
          name: 'Zombie',
          id: 'a3b4d'
        }
      ]
    };
  };

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => 
            (<h1 key = {monster.id}> 
              {monster.name} 
            </h1>)
          )
        }
      </div>
    )
  };
};

export default App;
