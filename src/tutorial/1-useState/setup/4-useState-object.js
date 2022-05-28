import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'Hello Peter',
  }); 

  const changeMessage = () => {
    if (person.name ==='peter') {
      setPerson({ ...person, message: 'Hello John', name: 'John', age: 50 });
    } else {
      setPerson({ ...person, message: 'Hello Mathew', name: 'Mathew', age: 24 });
    }
    
    // setMessage('hello world')
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  );
};
export default UseStateObject;
