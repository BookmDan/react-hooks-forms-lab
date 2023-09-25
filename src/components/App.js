import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import Filter from "./Filter"
// import ItemList from "./ItemList";
import ItemForm from "./ItemForm"


function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [filterCategory, setFilterCategory] = useState("All")

  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value)
  }

  const handleItemFormSubmit = (newItem) => {
    setItems([...items,newItem])
  }

  const filteredItems = 
    filterCategory === "All"
      ? items
      : items.filter((item) => item.category === filterCategory)

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <Filter onCategoryChange={handleFilterChange} />
      {/* <ItemList items={filteredItems} /> */}
      <ItemForm onItemFormSubmit={handleItemFormSubmit}/>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
