// Destructure to call the buildIn State, to not use Class Components.
import React, { useEffect, useState } from "react";
import { useForm } from "./useForm";
import { UnmountingExample } from "./unmountingExample";
import { useFetch } from "./useFetch";

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
  //useState

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

  // useEffect --> *first parameter: "this triggers depending on the second parameter, if no parameter is passed, it is called everytime the component renders, but if the secondParameter is passed as an empty arr=[] just renders ONCE. **Second parameter is the dependancy array that can be passed in. (is kind of a filter').
  // replace the ComponentDidMount && ComponentDidUnmount.
  useEffect(() => {
    console.log("First Parameter");
  }, [values.password]);

  // Example just a render when the component Mounts.
  useEffect(() => {
    console.log("One Render");
  }, []);

  //Using a custom reusable fetch hook.
  const [count2, setCountData] = useState(0);

  const { data, loading } = useFetch(`http://numbersapi.com/${count2}/trivia`);

  const [show, setShow] = useState(true);
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

      <hr />
      <h2>Mounting And Unmounting Example when toggles using useEffect</h2>
      <button onClick={() => setShow(!show)}>Toggle Me</button>
      {show && <UnmountingExample />}
      <hr />
      <h2>Fetching from an API:</h2>
      {!data ? "Loading..." : data}
      <div>count: {count2}</div>
      <button onClick={() => setCountData((c) => c + 1)}>Change Fact</button>
    </main>
  );
};

export default App;
