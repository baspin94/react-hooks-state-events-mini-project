import React, {useState} from "react";
import Button from "./Button";

function CategoryFilter({categories}) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  const categoryButtons = categories.map(category => {
    return <Button key={category} name={category} onButtonClick={handleClick} selectedCategory={selectedCategory} />
  })

  function handleClick(event){
    const newCategory = event.target.name;
    setSelectedCategory(newCategory);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
