import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Grid from '../components/Grid';
import range from 'prelude-es6/lib/List/range';

const SIZE = 20;
const data = range(SIZE).map((i) =>
                range(SIZE).map((j) => (i+j) % 2));

export default class App extends Component {
  render() {
    return <Grid data={ data }/>;
  }
}
