import React, { useState, useEffect } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);
  const [bigNum, setBigNum] = useState(1000000000);

  useEffect(() => {
    // This effect runs whenever num changes
    setBigNum(1000000000 + num);
  }, [num]);

  function increment() {
    setNum(num + 1);
  }

  return (
    <div>
      <span>
        Count: {num}
        <button onClick={increment}>+</button>
      </span>
      <h1>Expensive Calculation</h1>
      <p>{bigNum}</p>
      <hr/>
    </div>
  );
}

export default Counter;

