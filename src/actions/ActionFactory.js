import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Action from '../components/Action/Action'

export default function (actions) {

  function mapDispatchToProps (dispatch) {
    return { actions: { ...bindActionCreators(actions, dispatch) } }
  }

  return connect(null, mapDispatchToProps)(class extends Component {
    render () {
        return (
            <Action {...this.props} action={this.props.actions.load}/>
        )
    }
  })
}