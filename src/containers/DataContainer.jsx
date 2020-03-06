import React, { Component } from 'react';
import Axios from 'axios';
import { PeopleList } from '../components';
import { ProfilePage } from '../pages';
import commentData from '../data';

const componentByType = {
  list: PeopleList,
  profile: ProfilePage,
}

export default class DataContainer extends Component {
  state = {
    data: null,
    commentData,
    page: 1,
  }

  componentDidMount = () => {
    this.fetchData();
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { page } = this.state;
    if (prevState.page !== page) {
      this.fetchData();
    }
  }

  fetchData = (page = this.state.page) => {
    const now = new Date();
    const seed = now.getMinutes();

    this.setState({ data: null });
    Axios.get(`https://randomuser.me/api/?page=${page}&seed=${seed}&results=10&nat=fr`)
    .then(response => this.setState({ data: response.data }))
    .catch(error => console.error(error));
  }

  nextPage = () => {
    const { page } = this.state;
    this.setState({ page: page + 1 });
  }

  prevPage = () => {
    const { page } = this.state;
    if (page <= 1) {
      return;
    }
    this.setState({ page: page - 1 });
  }

  addComment = (personIndex, text) => {
    const { commentData } = this.state;
    commentData[personIndex].comments.push({
      text,
      date: new Date(),
    });
    this.setState({ commentData });
  }

  methods = {
    fetchData: this.fetchData,
    nextPage: this.nextPage,
    prevPage: this.prevPage,
    addComment: this.addComment,
  }

  render = () => {
    const { type } = this.props;
    const { data, page } = this.state;

    if (!data) {
      return <div>Loading...</div>;
    }

    const ComponentName = componentByType[type]

    return (
      <ComponentName
        people={data.results}
        methods={this.methods}
        page={page}
      />
    );
  }
}
