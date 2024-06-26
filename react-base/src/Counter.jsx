/* named import */
import { useState } from "react";
import Header from "./Header";

/* 
    function useState(initalValue){
        // code 

        function stateModifer(){

        }

        return [  initalValue, stateModifer  ]
    }


*/

export default function Counter() {
  /* array destructuring */
  const [count, setCount] = useState(0);

  function increment() {
    console.log("increment...");
    setCount(count + 1);
    console.log({ count });
  }

  function decrement() {
    console.log("decrement...");
    setCount(count - 1);
  }

  console.log("render");
  return (
    <>
      <Header />
      <h1>
        state variable Count: <span id="output">{count}</span>
      </h1>
      {/* <button onClick="increment()" >increment</button> */}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
}
