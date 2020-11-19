import React from 'react';
import ReactDOM from 'react-dom';
import AnswersListEntry from './AnswersListEntry.jsx';

const AnswersList = function(props) {
  return (
    <div className="container-answer">
      {
        props.answers.map((item, i) => {
          if (item['question_id'] === props.questionId) {
            return <AnswersListEntry
              questionId={props.questionId}
              answer={item}
              key={i}
            />;
          }
        })
      }
    </div>
  );
};

export default AnswersList;