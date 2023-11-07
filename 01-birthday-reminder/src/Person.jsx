import { X } from "lucide-react";

function Person({ name, age, fn }) {
  return (
    <>
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
        <button onClick={fn} className="delete-btn">
          <X />
        </button>
      </div>
    </>
  );
}

export default Person;
