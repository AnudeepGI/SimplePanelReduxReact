import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";


let closeHandle = () => {
  console.log("############");
  return {
    type: 'ADD_TODO',
    text: 'active'
  }
}


class Header extends Component {

  render() {
    const numbers = ['dashboard', 'page1', 'page2', 'page2'];
    const listItems = numbers.map((number) =>
      <li className="nav-item active"><a className="nav-link" href="#">{number}</a></li>
    );
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button type="button" onClick={() => { this.props.closeHandle() }} id="sidebarCollapse" className={this.props.state.newReducer.sideNavStatus} >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-align-justify"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav ml-auto">
              {listItems}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}


function mapStateToProps(state) {
  return { state }
}


function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    closeHandle: closeHandle
  }, dispatch)
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Header)