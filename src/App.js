import { useState } from 'react';

import  CardList  from './components/card-list/card-list.component.jsx';
import  SearchBox from './components/search-box/search-box.component.jsx';

import './App.css';

const App = () => {
  console.log('render');

  const [searchField, setSearchField] = useState(''); //* [value, setValue]
  console.log(searchField);

  const onSearchChange = (e) => { 
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString); //* triggers render when init-value changes
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
      {/*  <CardList monsters={filteredMonsters} /> */}
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
