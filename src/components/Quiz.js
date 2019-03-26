import React from 'react';
import propTypes from 'prop-types'
import Question from '../components/Question'; 
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';

function Quiz(props) {
    return (
        <div className="quiz">
            <QuestionCount
                counter={props.questionID}
                total={props.questionTotal}
            />
            <Question content={props.question} />
            <ul className="answerOptions">
                {props.answerOptions.map(renderAnswerOptions)}
            </ul>
        </div>
    );
}

function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

Quiz.propTypes = {
    answer: propTypes.string.isRequired,
    answerOptions: propTypes.array.isRequired,
    counter: propTypes.number.isRequired,
    question: propTypes.string.isRequired,
    questionID: propTypes.number.isRequired,
    questionTotal: propTypes.number.isRequired,
    onAnswerSelected: propTypes.func.isRequired,
};

export default Quiz;