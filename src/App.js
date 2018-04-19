import React, { Component } from 'react';
import Stats from "./components/Stats";
import Character from "./components/Character";
import Entry from "./components/Entry";
import Ability from "./components/Ability";
import characters from "./characters.json";
import { Col, Row, Container } from "./components/Grid";
import './App.css';

class App extends Component {
  // Setting this.state.friends to the friends json array
  constructor() {
    super();
    this.state = {
      characters
    };
  }

  changeName(name) {
    this.setState({name})
  }
  

  render() {
    return (
      <div>
      <Container>
        <Row>
          <Col size="md-12 sm-12">
              {this.state.characters.map(character => (
              <Character 
              id={character.id}
              key={character.id}
              name={character.name}
              race={character.race}
              home={character.home}
              class={character.class}
              image={character.image}
              str={character.str}
              sta={character.sta}
              int={character.int}
              dex={character.dex}
              agi={character.agi}
              ability1={character.ability1}
              abilityVal1={character.abilityVal1}
              ability2={character.ability2}
              abilityVal2={character.abilityVal2}
              ability3={character.ability3}
              abilityVal3={character.abilityVal3}
              ability4={character.ability4}
              abilityVal4={character.abilityVal4}
              />))}
              </Col>
          </Row>
          {this.state.characters.map(character => (
          <Entry
            id={character.id}
            key={character.id}
            name={character.name}
            race={character.race}
            home={character.home}
            class={character.class}
            image={character.image}
          />))}
        </Container>
      </div>
    )
  }
}

export default App;

