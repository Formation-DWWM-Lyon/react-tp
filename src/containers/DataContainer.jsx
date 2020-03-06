import React, { Component } from 'react';
import Axios from 'axios';
import { PeopleList } from '../components';
import { ProfilePage } from '../pages';

const componentByType = {
  list: PeopleList,
  profile: ProfilePage,
}

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
    const { type } = this.props;
    const { data } = this.state;

    if (!data) {
      return <div>Loading...</div>;
    }

    const ComponentName = componentByType[type]

    return (
      <ComponentName
        people={data.results}
        fetchData={this.fetchData}
      />
    );
  }
}
