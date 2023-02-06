function Button({name, onButtonClick}) {
    return (
        <button onClick={onButtonClick} name={name}>{name}</button>
    )

}

export default Button;