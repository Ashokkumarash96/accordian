import React, { useState } from "react";
import data from "./data";
import singleQuestion from "./components/SingleQuestion";

const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className='info'>
        <h3> Frequently Asked Questions</h3>
        <section className='info'>
          {questions.map((questions) => {
            return <singleQuestion key={questions.key} {...questions} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
