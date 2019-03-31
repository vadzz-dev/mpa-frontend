import React, { Component } from 'react';
import './App.css';
import { Menu } from 'semantic-ui-react';
import PatientInfo from './components/PatientInfo/PatientInfo';
import States from './components/States/States';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Menu attached="top">
          <Menu.Item icon="bars"/>
        </Menu>
        <PatientInfo/>
        <States/>
      </div>
    );
  }
}

export default App;