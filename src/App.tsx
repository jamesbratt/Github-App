import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';
import TableComponent from './components/TableComponent';
import AlertComponent from './components/AlertComponent';
import Form from './components/Form';
import Navbar from 'react-bootstrap/Navbar';

const App: React.FC = ({...props}:any) => { // TODO - write interface

  const { headers, data, isLoading, error } = props.resources;
  const tableProps = {
    headers,
    data,
    isLoading,
  };

  const fetchGithubData = (username: string, resource: string) => {
    props.dispatch(fetchData(username, resource));
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
        <p>Search for your Github repositories and organisations</p>
        <Form update={fetchGithubData} />
        {
          !error ?
            <TableComponent {...tableProps} /> :
            <AlertComponent message={error} />
        }
      </div>
    </React.Fragment>
  );
};

export default connect(
  state => {
    return state
  },
)(App);
