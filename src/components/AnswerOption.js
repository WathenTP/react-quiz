import React from 'react';
import propTypes from 'prop-types';

function AnswerOption(props) {
    return (
        <li className="answerOption">
            <input
                type="radio"
                className="radioCustomButtom"
                name="radioGroup"
                checked={props.answerType === props.answer}
                id={props.answerType}
                value={props.answerType}
                disabled={props.answer}
                onChange={props.onAnswerSelected}
            />
            <label className="radioCustomLabel" htmlFor
    {...props.answerType}>
                {props.answerContent}
              </label>
            </li>
    );
}

AnswerOption.propTypes = {
    answerType: propTypes.string.isRequired,
    answerContent: propTypes.string.isRequired,
    answer: propTypes.string.isRequired,
    onAnswerSelected: propTypes.func.isRequired
};

export default AnswerOption;