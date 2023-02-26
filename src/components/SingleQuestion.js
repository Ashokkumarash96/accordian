import React, { useState } from "react";

import { TfiAngleDoubleDown, TfiAngleDoubleUp } from "react-icons/tfi";

const singleQuestion = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <article className='question'>
      <header>
        <h4>{question}</h4>
        <button className='btn' onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? <TfiAngleDoubleDown /> : <TfiAngleDoubleUp />}
        </button>
      </header>
      {showAnswer && <p>{answer}</p>}
    </article>
  );
};

export default singleQuestion;
