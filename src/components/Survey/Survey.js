import React from "react";
import "./survey.css";

/* Redux stuff */
import { connect } from "react-redux";
import { chooseName, chooseColor, chooseQuest } from "../../redux/survey/actions/surveyActions"


function Survey(props) {
    const onChange = event => {
        const { name, value } = event.target;
        console.log(name, value);
        switch (name) {
            case "name":
                chooseName(value);
               /*  props.dispatch(chooseName(value)); */
                break;
            case "quest":
                chooseQuest(value);
               /*  props.dispatch(chooseQuest(value)); */
                break;
            case "color":
                chooseColor(value);
               /*  props.dispatch(chooseColor(value)); */
                break;
            default:
                break;
        }
    };

    return (
        <form className="survey">
            <label htmlFor="name">What is your name?</label>
            <select name="name" selected={props.name} onChange={(e)=>chooseName(e.target.value)}>
                <option value="" disabled>Please choose:</option>
                <option value="kingarthur">King Arthur</option>
                <option value="tim">There are some who call me...Tim?</option>
            </select>
            <label htmlFor="quest">What is your quest?</label>
            <select name="quest" selected={props.quest} onChange={onChange}>
                <option value="" disabled>Please choose:</option>
                <option value="grail">To seek the grail</option>
                <option value="tourist">Sight seeing</option>
            </select>
            <label htmlFor="color">What is your favorite color?</label>
            <select name="color" selected={props.color} onChange={onChange}>
                <option value="" disabled>Please choose:</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </select>
            <button>Submit</button>
        </form>
    );
}

const mapStateToProps = state => {
    return {
        name: state.survey.name,
        quest: state.survey.quest,
        color: state.survey.color
    };
};

const mapDispatchToProps = {
    chooseName,
    chooseColor,
    chooseQuest
};

export default connect(mapStateToProps, mapDispatchToProps)(Survey);

