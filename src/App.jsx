import { useState } from "react";
import questions from "./data";
import Questions from "./Components/Questions";

const App = () => {
  // use the data array as a state value
  const [data, setData] = useState(questions);

  // Pass the state value as a prop into the Questions Component
  return (
    <main>
      <Questions data={data} />
    </main>
  );
};
export default App;
