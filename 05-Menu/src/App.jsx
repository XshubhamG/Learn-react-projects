import { useEffect, useState } from "react";
import items from "./data";
import Categories from "./Categories";
import Menu from "./Menu";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesArr = [];
    items.forEach((item) => {
      if (!categoriesArr.includes(item.category)) {
        categoriesArr.push(item.category);
      }
    });
    setCategories(categoriesArr);
  }, []);

  const filteredItem = (category) => {
    const newItems = items.filter((item) => {
      return category === "all" ? item : item.category === category;
    });
    setMenuItems(newItems);
  };

  return (
    <>
      <main className="menu">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filteredItem={filteredItem} categories={categories} />
        <Menu items={menuItems} />
      </main>
    </>
  );
}

export default App;
