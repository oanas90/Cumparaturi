
const Form = ({onClick, person, setPerson}) =>{

    const handleChange = (event) => {
        event.preventDefault();
        setPerson({...person, [event.target.name]: event.target.value, [event.target.quantity]: event.target.value})
    };

    const handleClick = () => {
        onClick(person);
    };

    return(
        <div className="divForm">
            <form>
                <label>Adauga elemente!</label><br></br><br></br>
                <input type="text" onChange={handleChange} name="name" placeholder='Nume' value={person.name}></input><br></br><br></br>
                <input type="text" onChange={handleChange} name="quantity" placeholder='Cantitate' value={person.quantity}></input><br></br><br></br>
                <button type="button" onClick={handleClick}>Adauga</button>
            </form>
        </div>
    );
};

export default Form;