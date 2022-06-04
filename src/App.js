import React from "react";
import NewErrorExample from "./tutorial/1-useState/setup/1-error-example";
import UsingUseState from "./tutorial/1-useState/setup/2-useState-basics";
import UseStateArray from "./tutorial/1-useState/setup/3-useState-array";
import UseStateObject from "./tutorial/1-useState/setup/4-useState-object";
import UseStateCounter from "./tutorial/1-useState/setup/5-useState-counter";
import UseEffectBasics from "./tutorial/2-useEffect/setup/1-useEffect-basics";
import UseEffectBasicsCleanup from "./tutorial/2-useEffect/setup/2-useEffect-cleanup";
import UseEffectFetchData from "./tutorial/2-useEffect/setup/3-useEffect-fetch-data";
import MultipleReturns from "./tutorial/3-conditional-rendering/setup/1-multiple-returns";
import ShortCircuit from "./tutorial/3-conditional-rendering/setup/2-short-circuit";
import ShowHide from "./tutorial/3-conditional-rendering/setup/3-show-hide";
import ControlledInputs from './tutorial/4-forms/setup/1-controlled-inputs';
import MultipleInputs from "./tutorial/4-forms/setup/2-multiple-inputs";
import UseRefBasics from './tutorial/5-useRef/setup/1-useRef-basics';
import Index from './tutorial/6-useReducer/setup'
import PropDrilling from './tutorial/7-prop-drilling/setup/1-prop-drilling'
// import ContextAPI from './tutorial/8-useContext/setup/1-context-api'
// import Example from "./tutorial/9-custom-hooks/setup/1-fetch-example";

function App() {
  return (
    <div className="container">
      <h1>1. useState</h1> <br /> <br />
      <h2>1-error-Example</h2>
      <NewErrorExample /> <hr /> <br />
      <h2>2-useState-basics</h2>
      <UsingUseState /> <hr /> <br />
      <h2>3-useState-array</h2>
      <UseStateArray /> <hr /> <br />
      <h2>4-useState-objects</h2>
      <UseStateObject /> <hr /> <br />
      <h2>5-useState-counter</h2>
      <UseStateCounter /> <hr /> <br />
      <br />
      <h1>2. useEffect</h1> <br /> <br />
      <h2>1-useEffect-basics</h2>
      <UseEffectBasics />
      <hr /> <br />
      <h2>2-useEffect-cleanup</h2>
      <UseEffectBasicsCleanup /> <hr /> <br />
      <h2>3-useeeffect-fecth-data</h2>
      <UseEffectFetchData /> <hr /> <br />
      <h1>3. Conditional rendering</h1> <br /> <br />
      <h2>1-multiple-returns</h2>
      <MultipleReturns /> <hr /> <br />
      <h2>2-short-circuit</h2>
      <ShortCircuit /> <hr /> <br />
      <h2>3-show-hide</h2>
      <ShowHide />
      <hr /> <br />
      <br />
      <h1>4. Forms</h1> <br /> <br />
      <h2>1-controlled-inputs</h2>
      <ControlledInputs /><hr /> <br />
      <h2>2-multiple-inputs</h2>
      <MultipleInputs /><hr /> <br />
      <h1>5. UseRefBasics</h1> <br /> <br />
      <h2>1. useRef-basics</h2>
      <UseRefBasics /> <br /> <hr />
      <h1>6. useReducer</h1> <br /> <br />
      <Index /><br /> <hr />
      <h1>7. Prop Drilling</h1> <br /> <br />
      <h2>7-prop-drilling</h2>
      <PropDrilling /> <br /> <hr />
      <h1>8. useContext</h1> <br /> <br />

    </div>
  );
}

export default App;
