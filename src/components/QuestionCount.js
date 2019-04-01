import React from 'react';
import propTypes from 'prop-types'

function QuestionCount(props) {
    return (
        <div className="questionCount">
        Question <span>{props.counter}</span> of <span>{props.total}</span>
            </div>
    );
}

QuestionCount.propTypes = {
    counter: propTypes.number.isRequired,
    total: propTypes.number.isRequired
};

export default QuestionCount;