import React, { Component } from 'react';
import Axios from 'axios';
import { PeopleList } from '../components';

export default class DataContainer extends Component {
  state = {
    data: null,
  }

  componentDidMount = () => {
    Axios.get('https://randomuser.me/api/?page=2&results=10&seed=romain&nat=fr')
    .then(response => this.setState({ data: response.data }))
    .catch(error => console.error(error));
  }

  render = () => {
    const { data } = this.state;

    if (!data) {
      return <div>Loading...</div>;
    }

    return (
      <PeopleList people={data.results} />
    );
  }
}
