import React, { Component } from 'react';

import Loader from "react-loader-spinner";

export default class App extends Component {
    render() {
        return (
            <Loader
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
                />
        );
    }
}

