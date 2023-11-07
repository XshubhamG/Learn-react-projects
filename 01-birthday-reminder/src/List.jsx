import Person from "./Person";

const List = ({ people, deleteItem }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} id={id} className="person">
            <img src={image} alt={name} />
            <Person name={name} age={age} fn={() => deleteItem(id)} />
          </article>
        );
      })}
    </>
  );
};

export default List;
