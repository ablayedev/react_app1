import React, { Component } from "react";
import logo from "./logo.svg";
import { CardList } from "./components/cardList/cardList.component";
import "./App.css";
import { SearchBox } from "./components/searchbox/searchbox.component";
/**/
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filterMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(filterMonster);
    return (
      <div>
        <br />
        <h3 className="center">Vos monstres péféres</h3>
        <SearchBox
          type="search"
          placeholder="Rechercher"
          handleChange={e => this.setState({ searchField: e.target.value })}
          style={{ width: 150 }}
        />

        <CardList monsters={filterMonster} />
      </div>
    );
  }
}

export default App;
