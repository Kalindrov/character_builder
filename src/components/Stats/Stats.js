import React from "react";
import "./Stats.css";

const Stats = (props) => {
    return (
    <div className="box">
        <h4 className="statPlate">
        <span>CLASS STATS: </span>
        <span>STR {props.str} </span>
        <span>STA {props.sta} </span>
        <span>INT {props.int} </span>
        <span>DEX {props.dex} </span>
        <span>AGI {props.agi} </span>
        </h4>
    </div>
    )
  }

export default Stats;