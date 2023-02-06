function Button({name, onFilterClick, selectedCategory}) {
    
    return (
        <button 
            onClick={onFilterClick}
            name={name}
            className={(name === selectedCategory) ? "selected" : ""}>
            {name}
            </button>
    )

}

export default Button;