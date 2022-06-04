import React, { useState, useEffect } from "react";

const UseEffectBasicsCleanup = () => {
  const [initialValue, setValue] = useState(0);
  useEffect(() => {
    console.log("call useEffect");
    if (initialValue > 0) {
      document.title = `New Messages(${initialValue})`;
    }
  }, []);

  console.log("render component");
  return (
    <>
      <h1>{initialValue}</h1>
      <button className="btn" onClick={() => setValue(initialValue + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasicsCleanup;
