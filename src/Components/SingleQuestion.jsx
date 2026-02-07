import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
function SingleQuestion(props) {
  // Destructure the props object
  const { id, title, info } = props;
  // State Value to toggle answer
  const [showAnswer, setShowAnswer] = useState(false);

  function toggleAnswer() {
    // Switch the state
    if (showAnswer) {
      return setShowAnswer(false);
    }

    setShowAnswer(true);
  }

  // Conditional Rendering
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button type="button" className="question-btn" onClick={toggleAnswer}>
          {showAnswer ? <FaMinus /> : <FaPlus />}
        </button>
      </header>
      {showAnswer ? <p>{info}</p> : ""}
    </article>
  );
}

export default SingleQuestion;
