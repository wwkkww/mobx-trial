import React, { Component } from 'react';
import appStore from './components/Store';
import Table from './components/Table';
import Controls from './components/Controls';



class App extends Component {
  render() {
    return (
      <div>
        <h1>Mobx Table</h1>
        <Controls store={appStore} />
        <Table store={appStore} />
      </div>
    );
  }
}

export default App;
