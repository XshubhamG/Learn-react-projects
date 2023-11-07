import { useState } from "react";

export const Question = ({ id, title, info }) => {
  const [btn, setBtn] = useState("+");
  const [visible, setVisible] = useState(false);

  function showAnswer() {
    btn == "+" ? setBtn("-") : setBtn("+");
    visible ? setVisible(false) : setVisible(true);
  }
  return (
    <article key={id} className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={showAnswer}>
          {btn}
        </button>
      </header>
      <p>{visible && info}</p>
    </article>
  );
};
