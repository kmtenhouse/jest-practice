import React from "react";
import List from "../components/List";

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {
                    type: "input",
                    label: "What is your name?",
                    _id: 1
                },
                {
                    type: "input",
                    label: "What is your quest?",
                    _id: 2
                },
                {
                    type: "select",
                    label: "What is your favorite color?",
                    options: ["black", "red", "blue", "green", "purple", "orange"],
                    _id: 3
                }
            ]
        };
    }

    onChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value);
    }

    render() {
        return (
            <>
                <h2>{this.props.message}</h2>
                <List questions={this.state.questions} onChange={this.onChange} />
            </>
        );
    }
}

export default Main;