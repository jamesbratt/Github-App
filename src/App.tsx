import React from 'react';
import { connect } from 'react-redux';
import Table from './components/Table';
import Form from './components/Form';
import Loader from './components/Loader';

class App extends React.Component<any, any> {
  render() {
    return (
      <div className="App"></div>
    );
  }
}

export default connect(
  state => {
    return state
  },
)(App);
