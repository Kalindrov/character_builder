import React from "react";
import { Col, Row, Container } from "../Grid";
import Ability from "../Ability";
import characters from "../../characters.json";
import "./Character.css";

const Character = (props) => {

    let ability1 = (props.str * 1.3);
    let ability2 = (props.dex * 10);
    let ability3 = (props.str * props.dex);
    let ability3turn = (props.int / 2);
    let ability4 = (props.str * props.dex / props.sta);

    return (
    <div className="background">
        <Row>
            <Col size="md-5 sm-5">
                <span><img src={props.image} width="530" height="430" alt="" id="img" /></span>
                <h1 className="namePlate" id="name">{props.name}
                <div />
                <span id="class">--------- {props.race} {props.class} ---------</span></h1>
                <h2 className="namePlate" id="home">Home: {props.home}</h2>

                <h2 id="stats">CLASS STATS: </h2>
                <h2 id="stats">STR {props.str} </h2>
                <h2 id="stats">STA {props.sta} </h2>
                <h2 id="stats">INT {props.int} </h2>
                <h2 id="pstats">DEX {props.dex} </h2>
                <h2 id="pstats">AGI {props.agi} </h2>
            </Col>
            
            <Col size="md-7 sm-7">
            <div className="box"> 
                <h3 id="text">{props.ability1}</h3>
                <h2 id="value">Does {ability1} damage!</h2>
                <h3 id="text">{props.ability2}</h3>
                <h2 id="value">Does {ability2} damage!</h2>

                <h3 id="text">{props.ability3}</h3>
                <h2 id="value">Does {ability3} damage per turn for {ability3turn} turns to enemy!</h2>

                <h3 id="text">{props.ability4}</h3>
                <h3 id="value">Does reduce armor by {ability4}%!</h3>
                </div>
            </Col>
        </Row>
    </div>
    )
  }

export default Character;