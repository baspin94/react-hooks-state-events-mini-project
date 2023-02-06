import React from "react";
import Button from "./Button";

function CategoryFilter({categories, onFilterClick, selectedCategory}) {
  
  
  const categoryButtons = categories.map(category => {
    return <Button key={category} name={category} onFilterClick={onFilterClick} selectedCategory={selectedCategory} />
  })

  

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
