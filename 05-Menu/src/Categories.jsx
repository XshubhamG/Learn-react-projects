const Categories = ({ filteredItem, categories }) => {
  return (
    <div className="btn-container">
      <button
        className="filter-btn"
        onClick={(e) => filteredItem(e.currentTarget.textContent)}
      >
        all
      </button>
      {categories.map((item) => (
        <button
          className="filter-btn"
          onClick={(e) => filteredItem(e.currentTarget.textContent)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Categories;
