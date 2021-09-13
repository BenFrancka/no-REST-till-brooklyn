import React, { Component } from 'react';
import Request from '../components/request/Request';
import Response from '../components/response/Response';
import { fetchApiEndpoint } from '../services/fetch';

export default class RESTcontainer extends Component {
  state = {
    method: '',
    url: '',
    body: '',
    response: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { url, method, body } = this.state;

    await fetchApiEndpoint(url, method, body).then((response) =>
      this.setState({ response })
    );
  };
}
