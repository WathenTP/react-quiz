import propTypes from "prop-types"
import React from 'react';
  function Question(props) {
    return (
      <h2 className="question">{props.content}</h2>
    );
  }
  Question.propTypes = {
    content: propTypes.string.isRequired
  };
  export default Question;