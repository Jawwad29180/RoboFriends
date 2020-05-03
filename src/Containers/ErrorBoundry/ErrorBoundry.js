import React, {Component} from "react";

class ErrorBoundry extends Component{

    constructor(){
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }
    render(props) {        
             if (this.state.hasError) {
                 return <h1>Ein Fehler ist passiert!</h1>
             }
             return this.props.children;
            }
}

export default ErrorBoundry;