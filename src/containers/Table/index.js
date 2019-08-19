import React, { Component } from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SideMenu from '../../components/SideMenu';
import Table from '../../components/Table';
import { MDBDataTable } from 'mdbreact';


class Dashboard extends Component {
  render() {
    // this.props.menusidebar = ['dashboard','table','page2','page2']
    return (
      <div className="wrapper">
        <SideMenu menu={['dashboard','table','page2','page2']} />
          <div id="content">
            <Header></Header>
            <Table></Table>
          </div>
      </div>
    );
  }
}




export default Dashboard;
