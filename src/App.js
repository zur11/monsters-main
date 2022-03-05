import { useState, useEffect } from 'react';

import  CardList  from './components/card-list/card-list.component.jsx';
import  SearchBox from './components/search-box/search-box.component.jsx';

import './App.css';

const App = () => {

  const [searchField, setSearchField] = useState(''); 
  const [monsters, setMonsters] = useState([]); 
  const [filteredMonsters, setFilterMonsters] = useState(monsters); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setMonsters(users)
      );
  }, []); 

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilterMonsters(filteredMonsters);
  }, [monsters, searchField]); 


  const onSearchChange = (e) => { 
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString); 
  };

  return(
    <div className="App">
      <h1 className='app-title'> Monsters Rolodex</h1>
      
       <SearchBox 
        type='search'
        className='monsters-search-box'
        placeholder='search monsters' 
        onChangeHandler={ onSearchChange }
      />
      <CardList monsters={filteredMonsters} /> 
    </div> 
  )
}

//* CLASS COMPONENTS STRUCTURE
 /* class App extends Component {
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
        return { monsters: users };
      })
    );
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
      <h1 className='app-title'> Monsters Rolodex</h1>

        <SearchBox 
          type='search'
          className='monsters-search-box'
          placeholder='search monsters' 
          onChangeHandler={ onSearchChange }
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  };
};
*/
        


export default App;
