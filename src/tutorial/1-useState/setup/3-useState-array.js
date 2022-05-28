import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setNewPeople] = React.useState(data);


  //Removing People from the Array List
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !==id);
    setNewPeople(newPeople);
  };
  return(
    <>
      {people.map((person) =>{
        const {id, name} = person;
        return(
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })
      }
      <button className='btn' onClick={() => setNewPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
