import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchUser } from '../actions'

class UserHeader extends Component {
  componentDidMount () {
    this.props.fetchUser(this.props.userID)
  }

  render() { 
    return ( <p>{this.props.user && this.props.user.name}</p> );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userID) }
}

export default connect(mapStateToProps, {
  fetchUser: fetchUser
})(UserHeader);