import { useState, useEffect, useMemo, useCallback } from "react";

// expensive function
// The function is considered "expensive" due to the for loop that iterates 1,000,000,000 times. In this loop, it's not the function itself that is expensive, but rather the operation performed within the loop.

// step 4
const getArray = () => {
  for (let i = 0; i < 1000000000; i++) {
    //do something expensive
  }
  return ["Abdullah", "Al Ameer"];
};

// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. In mathematical terms, it can be defined by the recurrence relation:

// F(0) = 0
// F(1) = 1
// F(n) = F(n-1) + F(n-2) for n > 1

// This sequence produces the following numbers:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, and so on.





function App() {
  const [userNumber, setUserNumber] = useState("");
  // typing into the random input means updating the state and everytime a state is update in react, it re renders the component
  // and when the component re renders, its recalculating the  fib number
  const [randomInput, setRandomInput] = useState("");

  // step 3
  const fib = useCallback((n) => {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }, []);

  // const fibNumber = fib(userNumber); //comment out before step two

  // step two 
  const fibNumber = useMemo(() => fib(userNumber), [userNumber, fib]);


  // step 5
  const myArray = useMemo(() => getArray(), []);

  // step 6 - delete step 1
  useEffect(() => {
    console.log("New array");
  }, [myArray]);

  // step one
  // useEffect(() => {
  //   console.log("New array");
  // }, [fibNumber]);

  return (
    <main className="App">
      <label>Fibonacci Sequence:</label>
      <input
        type="number"
        value={userNumber}
        placeholder="Position"
        onChange={(e) => setUserNumber(e.target.value)}
      />
      <p>Number: {fibNumber || "--"}</p>
      <br />
      <br />
      <label>Random Input:</label>
      <input
        type="text"
        value={randomInput}
        placeholder="Random Input"
        onChange={(e) => setRandomInput(e.target.value)}
      />
      <p>{randomInput}</p>
    </main>
  );
}

export default App;
