import React, { Component } from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SideMenu from '../../components/SideMenu';

class Dashboard extends Component {
  render() {
    const numbers = ['dashboard','table','page2','page2'];


    return (
      <div className="wrapper">
        <SideMenu menu={['dashboard','table','page2','page2']} />
          <div id="content">
            <Header/>
          </div>
      </div>
    );
  }
}
export default Dashboard;
