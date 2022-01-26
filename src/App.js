//modules
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

//components
import Login from  './components/Login';
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';
import LogOut from './components/LogOut';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const isLoggedIn = localStorage.getItem("token");
  return (
    <Router>
    <div className="App">
      <h2>Client Auth Project</h2>
      <ul className="router-nav">
        <li>
          <Link to="/friends">Friends List</Link>
        </li>
        <li>
          <Link to="/friends/add">Add Friend to List</Link>
        </li>
        <li>
          <Link to="/logout">Log Out</Link>
        </li>
      </ul>
      <Switch>
        //temporary, secure route needed
        <PrivateRoute exact path="/friends" component={FriendsList} />
        <PrivateRoute exact path="/friends/add" component={AddFriends} />
        <Route exact path="/logout" component={LogOut} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
