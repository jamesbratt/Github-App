import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';
import TableComponent from './components/TableComponent';
import AlertComponent from './components/AlertComponent';
import Form from './components/Form';
import Navbar from 'react-bootstrap/Navbar';

class App extends React.Component<any, any> {

  fetchGithubData = (username: string, resource: string) => {
    this.props.dispatch(fetchData(username, resource));
  }

  render() {
    const { headers, data, isLoading } = this.props.resources;
    const tableProps = {
      headers,
      data,
      isLoading,
    };

    return (
      <React.Fragment>
        <header>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Github App</Navbar.Brand>
          </Navbar>
        </header>
        <div className="container">
          <hr/>
          <Form update={this.fetchGithubData} />
          {
            !this.props.resources.error ?
              <TableComponent {...tableProps} /> :
              <AlertComponent message={this.props.resources.error} />
          }
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  state => {
    return state
  },
)(App);
