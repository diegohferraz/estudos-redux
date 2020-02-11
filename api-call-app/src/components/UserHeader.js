import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchUser } from '../actions'

const UserHeader = ({ user }) => <p>{user && user.name}</p>

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userID) }
}

export default connect(mapStateToProps, {
  fetchUser: fetchUser
})(UserHeader);