// Destructure to call the buildIn State, to not use Class Components.
import React, { useState } from "react";
import { useForm } from "./useForm";

/*If there is a big computation is better to
 create a function instead of pasing the parameter directetly to the useState(), 
 so that it is called just the first time and not every time that the component renders.
 example: 

 const initialState = () => {
 return 10; 
 }

 .then

 const x = useState(()=> initialState());
*/
const App = () => {
  //Example using strings or Numbers as parameters in state.
  const [count, setCount] = useState(10);
  //Example using an object, value:key pairs as parameters in state.
  const [{ countObj, countObj2 }, setCountObj] = useState({
    countObj: 10,
    countObj2: 30,
  });

  //Form Example
  const [values, handleChange] = useForm({
    email: "",
    password: "",
  });

  return (
    <main className="App">
      {/*  cCount = the current count(current state ) (* avoid over rendering*/}
      <h2>Counter using strings or number in state as parameter</h2>
      <button onClick={() => setCount((cCount) => cCount + 1)}>
        {" "}
        Add to the count +{" "}
      </button>
      <h2>{count}</h2>
      <hr />
      <h2>Counter using an Object in state as parameter</h2>
      <button
        onClick={() =>
          setCountObj((currentState) => ({
            ...currentState,
            countObj: currentState.countObj + 1,
          }))
        }
      >
        {" "}
        Add to the count +{" "}
      </button>
      <h2>Count 1: {countObj}</h2>
      <h2>Count 2: {countObj2}</h2>

      <hr />
      <h2>Forms</h2>
      <input name="email" value={values.email} onChange={handleChange} />
      <input
        type="password"
        value={values.password}
        onChange={handleChange}
        name="password"
      />
    </main>
  );
};

export default App;
