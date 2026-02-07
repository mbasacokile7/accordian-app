import { useState } from "react";
import questions from "./data";
import SingleQuestion from "./Components/SingleQuestion";

const App = () => {
  // use the data array as a state value
  const [data, setData] = useState(questions);

  // Get Question ID
  function getQuestionId(id) {}

  // Destructure the data
  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        {data.map((question) => {
          return <SingleQuestion key={question.id} title={question.title} />;
        })}
      </section>
    </main>
  );
};
export default App;
