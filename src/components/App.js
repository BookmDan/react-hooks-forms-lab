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
  const [filterCategory, setFilterCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value);
  }

  const handleSearchChange = (search) => {
    setSearchTerm(search);
  }

  const filteredItems = 
    filterCategory === "All"
      ? items
      : items.filter((item) => item.category === filterCategory);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const handleItemFormSubmit = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <Filter onCategoryChange={handleFilterChange} onSearchChange={handleSearchChange} />
      <ShoppingList items={filteredItems} searchTerm={searchTerm} />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
    </div>
  );
}

export default App;
