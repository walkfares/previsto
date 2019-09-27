import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Nav, Navbar, Button } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";
import { Stitch } from "mongodb-stitch-browser-sdk";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }

  stitchclient = Stitch.initializeDefaultAppClient("previsto-owcvm");

  handleLogout = event => {
    this.stitchclient.auth.logout();
    this.hasAuthenticated(false);
    this.props.history.push("/login");
  }
  hasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  componentDidMount() {
    // Is the user already logged in?
    this.hasAuthenticated(this.stitchclient.auth.isLoggedIn);
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      hasAuthenticated: this.hasAuthenticated,
      stitchclient: this.stitchclient
    };
    return (
      <div className="App container-fluid">

        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Previsto</Navbar.Brand>
          <Nav className="justify-content-end">
            <LinkContainer to="/features">
              <Nav.Item className="nav-link">Features</Nav.Item>
            </LinkContainer>
            <LinkContainer to="/pricing">
              <Nav.Item className="nav-link">Pricing</Nav.Item>
            </LinkContainer>
            {this.state.isAuthenticated
              ? <Fragment>
                <LinkContainer to="/profile">
                  <Nav.Item className="nav-link">Profile</Nav.Item>
                </LinkContainer>
                <Button variant="outline-light" onClick={this.handleLogout}>Logout</Button>
              </Fragment>
              : <Fragment>
                <LinkContainer to="/login">
                  <Nav.Item className="justify-content-end nav-link">Login</Nav.Item>
                </LinkContainer>
              </Fragment>
            }

          </Nav>
        </Navbar>

        <Routes childProps={childProps} />

      </div>
    );
  }

}

export default withRouter(App);
