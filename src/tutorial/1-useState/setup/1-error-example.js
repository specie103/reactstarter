import React from "react";

const NewErrorExample = () => {
  let title = "The Real Title";

  const handleClickButton = () => {
    let title = "The Clicked Button Title";
    console.log(title);
  };
  return (
    <React.Fragment>
      <div>
        <h2>{title}</h2>
        <button className="btn" type="button" onClick={handleClickButton}>
          Click to Change Title
        </button>
        
        <p>Check your console to see the changes.</p>
      </div>
    </React.Fragment>
  );
};

export default NewErrorExample;
