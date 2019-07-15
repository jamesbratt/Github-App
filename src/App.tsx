import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';
import TableComponent from './components/TableComponent';
import AlertComponent from './components/AlertComponent';
import Form from './components/Form';
import Loader from './components/Loader';

class App extends React.Component<any, any> {

  fetchGithubData = (username: string, resource: string) => {
    this.props.dispatch(fetchData(username, resource));
  }

  componentDidMount() {
    this.fetchGithubData('jonjockay', 'repos');
  }

  render() {
    const tableProps = {
      headers: this.props.resources.headers,
      data: this.props.resources.data,
    };

    return (
      <div className="App">
        {
          !this.props.resources.error ?
            <TableComponent {...tableProps} /> :
            <AlertComponent message={this.props.resources.error} />
        }
        <Form update={() => {}} />
        <Loader />
      </div>
    );
  }
}

export default connect(
  state => {
    return state
  },
)(App);
