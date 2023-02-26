import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./components/SingleQuestion";

const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className='info'>
        <h3> Frequently Asked Questions</h3>
        <section className='info'>
          {questions.map((question) => {
            return <SingleQuestion key={questions.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
