import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import ContactForm from "./Form";

function RoutingExample() {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <hr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/service' component={Service} />
            <Route path='/contactForm' component={ContactForm} />
            <Route path='/users' component={Users} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is home page.</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is about page.</p>
    </div>
  );
}

function Service() {
  return (
    <div>
      <h1>Service</h1>
      <p>This is service page.</p>
    </div>
  );
}

function Users({ match }) {
  console.log(match);
  return (
    <div>
      <ul>
        <li>
          <Link to={`${match.url}/1`}>Ajay</Link>{" "}
        </li>
        <li>
          <Link to={`${match.url}/2`}>Vijay</Link>{" "}
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:id`} component={User}></Route>
        <Route exact path={match.path} render={()=><h2>Please select user</h2>}></Route>
      </Switch>
    </div>
  );
}

function User({ match }) {
  return (
    <div>
      <h1>User Detail</h1>
      <p>User Id: {match.params.id}</p>
      {(parseInt(match.params.id) == 3) ? (<Redirect to="/users" />) : ''}
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h1>404</h1>
      <p>Oop's! Page not found.</p>
    </div>
  );
}

function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to={{ pathname: "/service" }}>Service</Link>
        </li>
        <li>
          <Link to='/contactForm'>Contact Form</Link>
        </li>
        <li>
          <Link to='/users'>Users</Link>
        </li>
      </ul>
    </div>
  );
}

export default RoutingExample;
