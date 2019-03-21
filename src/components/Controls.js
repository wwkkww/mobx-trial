import React, { Component } from 'react'
import { configure } from 'mobx'
configure({enforceActions: "observed"})

class Controls extends Component {

  addEmployee = () => {
    const name = prompt("Enter name:")
    const salary = parseInt(prompt("Your salary:"), 10)
    this.props.store.addEmployee({ name, salary })
    console.log(this.props.store)
  }

  clearList = () => {
    this.props.store.clearList()
    console.log(this.props.store)
  }

  render() {
    return (
      <div className="controls">
        <button onClick={this.clearList}>Clear table</button>
        <button onClick={this.addEmployee}>Add record</button>
      </div>
    );
  }
}

export default Controls