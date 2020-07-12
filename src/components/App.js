import React from 'react';
import { connect } from 'react-redux'
import Todos from './Todos'
import Goals from './Goals'
import {
  handleInitialData
} from '../actions/shared'

class App extends React.Component {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(handleInitialData());
  }
  render () {

    if (this.props.loading) {
      return <h3>loading...</h3>
    }

    return (
      <div>
        App
        <Todos />
        <Goals />
      </div>
    )
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App);
