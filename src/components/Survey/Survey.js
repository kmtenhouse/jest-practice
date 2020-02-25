import React from "react";
import "./survey.css";

function Survey(props) {
    return(
        <form className="survey">
            <label htmlFor="name">What is your name?</label>
            <select name="name">
                <option value="" selected disabled>Please choose:</option>
                <option value="kingarthur">King Arthur</option>
                <option value="tim">There are some who call me...Tim?</option>
            </select>
            <label htmlFor="quest">What is your quest?</label>
            <select name="quest">
                <option value="" selected disabled>Please choose:</option>
                <option value="grail">To seek the grail</option>
                <option value="tourist">Sight seeing</option>
            </select>
            <label htmlFor="color">What is your favorite color?</label>
            <select name="color">
                <option value="" selected disabled>Please choose:</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </select>
            <button>Submit</button>
        </form>
    );
}

export default Survey;