import React, { Component } from "react";
import CardList from '../../Components/CardList/CardList';
import SearchField from "../../Components/SearchField/SearchField";
import Scroll from "../../Components/Scroll/Scroll";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";

import "./App.css";
class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    onSearchChanged = (event) => {
        this.setState({ searchField: event.target.value });
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));

    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        }
        )

        if (!robots.length) {
            return (<div>
                <h1>Robo Friends</h1>
                <SearchField onSearchChanged={this.onSearchChanged} />

                <h1>loading data</h1>

            </div>
            );
        } else {
            return (
                <div>
                    <h1>Robo Friends</h1>
                    <SearchField onSearchChanged={this.onSearchChanged} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>

            );
        }

    }
}

export default App;