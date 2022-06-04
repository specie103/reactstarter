import React, { useState } from 'react';

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  return (
    <div>
      <h4>{text || 'Lawrencium Spp'}</h4>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h5>Error...</h5>}
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h5>there is no error</h5>
        </div>
      )}
    </div>
  );
};

export default ShortCircuit;
