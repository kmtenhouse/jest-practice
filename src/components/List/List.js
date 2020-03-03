import React from "react";

class List extends React.Component {
    render() {
        return (
            <form>
                {this.props.questions.map(q => {
                    if (q.type === "input") {
                        return <InputBox
                            key={q._id}
                            _id={q._id}
                            label={q.label}
                            onChange={this.props.onChange}
                        />
                    } else if (q.type === "select") {
                        return <DropDown
                            key={q._id}
                            _id={q._id}
                            label={q.label}
                            options={q.options}
                            onChange={this.props.onChange} />
                    } else {
                        return "";
                    }
                })}
            </form>);
    }
}

function InputBox(props) {
    return (
        <div>
            <label htmlFor={props._id}>{props.label}</label>
            <input type="text" name={props._id} onChange={props.onChange} />
        </div>
    );
}

function DropDown(props) {
    return (
        <div>
            <label htmlFor={props._id}>{props.label}</label>
            <select name={props._id} onChange={props.onChange}>
                {props.options.map((option, index) => <option key={props._id + "-" + index}>{option}</option>)}
            </select>
        </div>
    );
}


export default List;