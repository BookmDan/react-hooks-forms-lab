// shoppinglist.js
import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(term) {
    setSearchTerm(term);
  }

  const filteredItems = items.filter((item) => {
    const categoryMatches = selectedCategory === "All" || item.category === selectedCategory;
    const textMatches = item.name.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatches && textMatches;
  });
  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
