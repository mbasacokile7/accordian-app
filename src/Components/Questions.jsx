import SingleQuestion from "./SingleQuestion";

function Questions({ data }) {
  // The data is now used a prop, flowing from the grand-parent(App)
  return (
    <section className="container">
      <h1>Questions</h1>
      {data.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            title={question.title}
            info={question.info}
          />
        );
      })}
    </section>
  );
}

export default Questions;
