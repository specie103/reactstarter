import React, { useState } from "react";

const UsingUseState = () => {
  const [initialText, changedText] = useState("The Initial Title");
  const ChangeTitle = () => {
    if (initialText === "The Initial Title") {
      changedText('This is the Click Button Title');
    } else {
      changedText("The Initial Title");
    }
  };
  return (
    <React.Fragment>
      <h5>{initialText}</h5>
      <button type="button" className="btn" onClick={ChangeTitle}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UsingUseState;
