function Button({name, onButtonClick, selectedCategory}) {
    
    return (
        <button 
            onClick={onButtonClick}
            name={name}
            className={(name === selectedCategory) ? "selected" : ""}>
            {name}
            </button>
    )

}

export default Button;