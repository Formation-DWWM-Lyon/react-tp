import React, { Component } from 'react';
import Axios from 'axios';
import { PeopleList } from '../components';

export default class DataContainer extends Component {
  state = {
    data: null,
  }

  componentDidMount = () => {
    this.fetchData();
  }

  fetchData = () => {
    const now = new Date();
    const seed = now.getMinutes();

    this.setState({ data: null });
    Axios.get(`https://randomuser.me/api/?page=1&seed=${seed}&results=10&nat=fr`)
    .then(response => this.setState({ data: response.data }))
    .catch(error => console.error(error));
  }

  render = () => {
    const { data } = this.state;

    if (!data) {
      return <div>Loading...</div>;
    }

    return (
      <PeopleList
        people={data.results}
        fetchData={this.fetchData}
      />
    );
  }
}
