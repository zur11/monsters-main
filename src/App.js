import React, { Component } from 'react';

import  CardList  from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component.jsx';

import './App.css';

class App extends Component {
  constructor() {
    super(); 

    this.state = { 
      monsters: [],
      searchField: ''
    };
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState(() => {
      return { monsters: users }}
    ));
  };

  onSearchChange = (e) => { 
    const searchField = e.target.value.toLowerCase();
    this.setState(() => {
      return {searchField};
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <SearchBox 
          placeholder='search monsters' 
          handleChange={ onSearchChange }
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  };
};
        


export default App;
