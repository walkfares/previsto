import React, { Component, Fragment } from "react";
import { Card, CardDeck } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="Home">
                <div className="lander">
                    <h1>Previsto</h1>
                    <p>Corporate gaming management</p>
                    {!this.props.isAuthenticated ?
                        <Fragment>
                            <LinkContainer to="/login">
                                <a href="#login">Login</a>
                            </LinkContainer>
                        </Fragment> : <br />
                    }
                    <div>
                    <CardDeck>
                        <Card border="success" style={{ width: '18rem' }}>
                            <Card.Header>Step 1</Card.Header>
                            <Card.Body>
                                <Card.Title>Choose a game</Card.Title>
                                <Card.Text>
                                    Choose a game from one of our cool games covering sports and other fun activities
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card border="success" style={{ width: '18rem' }}>
                            <Card.Header>Step 2</Card.Header>
                            <Card.Body>
                                <Card.Title>Configure the game</Card.Title>
                                <Card.Text>
                                    Set the parameters for the game: Is it a paid game, are there prizes etc.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card border="success" style={{ width: '18rem' }}>
                            <Card.Header>Step 3</Card.Header>
                            <Card.Body>
                                <Card.Title>Invite your colleagues</Card.Title>
                                <Card.Text>
                                    After configuring your game, you will be given a unique key to send to your colleagues for them to sign up to your game
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </CardDeck>
                    </div>
                </div>
            </div>
        );
    }
}
