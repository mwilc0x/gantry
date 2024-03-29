import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlanetActions from '../actions/planets';
import DevTools from './DevTools';
import { List } from 'immutable-props';
import { createSelector } from 'reselect';
import {
  ImmutableComponent,
  PlanetList
} from '../components/index';

class App extends ImmutableComponent {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.fetchPlanets('/planets');
  }

  render() {
    const { planets } = this.props;
    return (
      <div>
        <PlanetList planets={planets.get('planets')} />
        <DevTools />
      </div>
    );
  }
}

App.propTypes = {
  planets: Map
};

const mapStateToProps = (state) => {
  return {
    planets: state.planets
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PlanetActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);