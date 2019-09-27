import React, { Component } from "react";
import { Button, Form} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { UserPasswordCredential } from "mongodb-stitch-browser-sdk";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    const app = this.props.stitchclient;
    const credential = new UserPasswordCredential(this.state.email, this.state.password);
    app.auth.loginWithCredential(credential)
      .then(authedUser => {
        this.props.hasAuthenticated(true);
        this.props.history.push("/");
      })
      .catch(err => {
        alert(`login failed with error: ${err}`);
        this.setState({ isLoading: false });
      })
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </Form.Group>
          <LoaderButton
              block
              disabled={!this.validateForm()}
              type="submit"
              isLoading={this.state.isLoading}
              text="Login"
              loadingText="Logging in…"
            />
          <Button
            block
          >
          Sign-up</Button>
        </form>
      </div>
    );
  }
}
