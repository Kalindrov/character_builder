import React, {Component} from 'react';
import characters from "../../characters.json";
import "./Entry.css";

class Entry extends Component {

    state = {
            data: characters.name
        }

    changeName = (name) => {
        console.log(name.target.value)
        console.log("I changed my name")
        this.setState({
            data: name.target.value
        })
    }

    render() {

    return (
        <div className="entries">
            <hr />
            <span className="Name" id="nameField">Name</span><input type="text" onChange={this.changeName}/>
            <span className="Race" id="raceField">Race</span><input type="text"/>
            <span className="Class" id="classField">Class</span><input type="text"/>
        </div>
        )
    }
}

export default Entry;