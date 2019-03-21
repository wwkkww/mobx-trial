import React, { Component } from 'react'
import Row from './Row';
import { observer } from 'mobx-react';

class Table extends Component {
  render () {
    const {store} = this.props
    return (
      <table>
        <thead>
          <tr>
            <td>Name:</td>
            <td>Daily salary:</td>
          </tr>
        </thead>
        <tbody>
          {store.employeeList.map((employee, i)=>
            <Row key={i} data={employee} />
          )}
        </tbody>
        <tfoot>
          <tr>
            <td>TOTAL:</td>
            <td>{store.totalSum}</td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

Table = observer(Table)

export default Table