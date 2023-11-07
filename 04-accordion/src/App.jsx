import { Question } from "./Question";
import questions from "./data";
function App() {
  console.log(questions);
  return (
    <>
      <main>
        <div className="container">
          <h3 className="title">Questions</h3>
          <section>
            {questions.map((ques) => (
              <Question info={ques.info} title={ques.title} key={ques.id} />
            ))}
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
