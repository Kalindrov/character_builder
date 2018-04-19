import React from "react";
import { Col, Row, Container } from "../Grid";
import "./Ability.css";

const Ability = (props) => {

    let ability1 = (props.str * 1.3);
    let ability2 = (props.dex * 10);
    let ability3 = (props.str * props.dex);
    let ability3turn = (props.int / 2);
    let ability4 = (props.str * props.dex);

    return (
    <div id="box">
        <Row>
            <Col size="md-12 sm-12">
                <h3 id="text">{props.ability1}</h3>
                <h2 id="value">This ability does {ability1} damage!</h2>
                <h3 id="text">{props.ability2}</h3>
                <h2 id="value">This ability does {ability2} damage!</h2>

                <h3 id="text">{props.ability3}</h3>
                <h2 id="value">This ability does {ability3} damage per turn for {ability3turn} turns to enemy!</h2>

                <h3 id="text">{props.ability4}</h3>
                <h3 id="value">{props.abilityVal4}</h3>
            </Col>
        </Row>
    </div>
    )
  }

export default Ability;