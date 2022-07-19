import React, { Component } from 'react'
import { Outlet } from 'react-router-dom';

export default class Add extends Component {
  render() {
    return (
      <div>
          <div>add</div>
          <Outlet/>
      </div>
    )
  }
}
