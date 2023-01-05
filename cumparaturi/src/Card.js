import './Card.css'


const Card = ({ item, handleIncrement, handleDecrement, markCompleted , markIncompleted}) => {

    return (
      <div className="divCard">
          <p>Nume: {item.name} </p>
          <p>Cantitate: {item.quantity}</p>
        <p>Modifica cantitatea:</p>
        <button className='btnPlus' type='button' onClick={() => handleIncrement(item.key)}>+</button>
        <button className='btnMinus' type='button' onClick={() => handleDecrement(item.key)}>-</button>
        <div className='mark'>
            <button className='btnCompleted' type='button' onClick={() => markCompleted(item.key)}>Mark as {item.completed ? 'incompleted' : 'completed'}</button>
        </div>
      </div>
    );
  };
  
  export default Card;