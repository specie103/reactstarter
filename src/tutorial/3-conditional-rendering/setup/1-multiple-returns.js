import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/specie103';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  
  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h5>Loading...</h5>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h5>Error....</h5>
      </div>
    );
  }
  return (
    <div>
      <h5>{user}</h5>
    </div>
  );
};

export default MultipleReturns;
