import React, { Component } from "react";
import { connect } from 'react-redux'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class SideMenu extends React.Component {



  render() {
    console.log(this.props.state.newReducer.sideNavStatus);

    const listItems = this.props.menu.map((number) =>
      <li><a href="table">{number}</a></li>
    );

    return (
      <nav id="sidebar" className={this.props.state.newReducer.sideNavStatus}>
        <div className="sidebar-header">
          <h3>Bootstrap Sidebar</h3>
        </div>
        <ul className="list-unstyled components">
          <p>Dummy Heading</p>
          {listItems}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { state }
}



export default connect(
  mapStateToProps,
  ''
)(SideMenu)