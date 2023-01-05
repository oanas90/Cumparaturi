import './App.css';
import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import Form from './Form';
import Card from './Card';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {

  const[person, setPerson] = useState({
    name: '',
    quantity: '',
  });

const [array, setArray] = useState([]);

const onClick = ({name, quantity}) => {
  if(name !== '' && quantity !== '')
    setArray([...array, { name, quantity, completed:false, key:uuidv4() }]);
  else
    alert('Introduceti numele si cantitatea!');
  clearInputs();
}

const clearInputs = () => {
  let currentPers = person;
  currentPers.name = '';
  currentPers.quantity='';
  setPerson(currentPers);
}
const toBuy = () => {
  return array.filter((item) => item.completed === false).length;
}

const bought = () => {
  return array.filter((item) => item.completed === true).length;
}
const handleIncrement = (key) => {
  let currentCard
  const updatedCard = array.map((item) =>{
    if(item.key === key){
      currentCard = item;
      item.quantity = parseInt(item.quantity) + 1;
      alert(`Ati modificat cantitatea pentru persoana: ${currentCard.name} 
      Cantitate noua: ${currentCard.quantity}`);
    }
    return item;
  });

  let newCard = updatedCard;
  setArray(newCard);
}

const handleDecrement= (key) => {
  let currentCard;
  let deleteCard;

  const updatedCard = array.map((item) =>{
    if(item.key === key){
      currentCard = item;
      item.quantity = parseInt(item.quantity) - 1;
      if(item.quantity === 0){
        deleteCard = item;
        alert(`Ati sters cardul cu numele: ${deleteCard.name}`);
      }  
      else
        alert(`Ati modificat cantitatea pentru persoana: ${currentCard.name} 
        Cantitate noua: ${currentCard.quantity}`);
    }
    return item;
  });

  const updatedArray = updatedCard.filter((item) => item.quantity !== 0);
  const newCard = updatedArray;
  setArray(newCard);
}

const markCompleted = (key) => {
  const newArray = array.map((item) => {
    if(item.key === key)
      item.completed = true;
    return item;
  });
  const newCard = newArray;
  //const completedCard = newArray.filter((item) => item.completed === true)
  setArray(newCard);
}

const markIncompleted = (key) => {
  const newArray = array.map((item) => {
    if(item.key === key)
      item.completed = false;
    return item;
  });
  const newCard = newArray;
  //const incompletedCard = newArray.filter((item) => item.completed === false)
  setArray(newCard);
}

return(
  <>
  <div className='container'>
    <div className='header'>
      <Header/>
      </div>
      <sidebar className='sidebar'>
        <Form className='clsForm' onClick={onClick} setPerson={setPerson} person={person}>
        </Form>
      </sidebar>
      <main className='main'>
        <table>
          <thead>
          <tr className='tableHeader'>
            <th >
              <div className='divTh'>{toBuy()} de cumparat</div>
            </th>
            <th className='tableHeader'>
              <div className='divTh'>{bought()} cumparate</div>
            </th>
          </tr>
          </thead>
              <tbody>
            <tr>
              <td align='center'>
                <>
                {array.filter((item) => item.completed === false).map((item) => { 
                return(item.name !== '' && item.quantity !== ''?
                <Card key={item.key} className='cardToBeCompleted' item={item} handleIncrement={handleIncrement} handleDecrement={handleDecrement} markCompleted={markCompleted} ></Card>
                : '')})}
                </>
              </td>
              <td>
                <>
                {array.filter((item) => item.completed === true).map((item) => { 
                return(item.name !== '' && item.quantity !== ''?
                <Card key={item.key} className='cardCompleted' item={item} handleIncrement={handleIncrement} handleDecrement={handleDecrement} markIncompleted={markIncompleted}></Card>
                : '')})}
                </>
              </td>
          </tr></tbody> 
        </table>
      </main>
      <div className='footer'>
        <Footer />
      </div>
  </div>
  </>
)

}
export default  App;
