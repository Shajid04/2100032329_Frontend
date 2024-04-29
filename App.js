import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Employee from './Employee';
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';
import EmployeeDetails from './EmployeeDetails';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/Employee" />
          </Route>
          <Route path="/Home" component={Home} />
          <Route path="/Employee" component={Employee} />
          <Route path="/add" component={AddEmployee} />
          <Route path="/edit/:id" component={EditEmployee} />
          <Route path="/details/:id" component={EmployeeDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
