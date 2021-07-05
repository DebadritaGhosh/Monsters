import React from 'react';
import "./App.css";
import { CardList } from "./components/card-list/CardList";
import { SearchBox } from "./components/card-list/SearchBox";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChanger = (sear) => {
    this.setState({ searchField: sear.target.value })
  }
  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1 className="title">MONSTERS ROLODEX</h1>
        <SearchBox placeholder="Search Monsters"
          handleChanger={this.handleChanger} />
        {/* <input type="search" placeholder="search monsters"
          onChange={(sear => this.setState({ searchField: sear.target.value },() =>console.log(this.state.searchField)
          ))}/> */}
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;

