import React, { Component } from "react";
import GameInfo from "../components/GameInfo";
import {getGames} from "../components/StitchFunctions";
import "./Features.css";

export default class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        getGames(this.props)
            .then(data => this.setState({data: data}))
            ;
    }

    render() {
        return (
            <div className="Features">
            {
                this.state.data &&
                this.state.data.map(item => (
                    <GameInfo key={item._id.toString()} item={item} />
                ))
            }

        </div>
        )}
}
