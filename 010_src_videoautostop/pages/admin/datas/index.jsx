import React, { Component } from 'react';
import {Outlet}from 'react-router-dom'



export default class Data extends Component {
  render() {
    return (
    <div>   data
  <Outlet/> 
    </div>
    )}
}
