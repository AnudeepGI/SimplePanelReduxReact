import React from 'react';
import { BrowserRouter as Router, Route , Link} from "react-router-dom";
import Dashboard from '../src/containers/Dashboard/';
import Table from '../src/containers/Table/';
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/Dashboard" component={Dashboard} />
      <Route path="/table" component={Table} />
    </Router>
  );
}

export default App;
