// import React from "react";
import './CounterComponent.css';
import React, { useState,useEffect } from "react";

function CounterComponent() {
  const [count, setCount] = useState(0);
  const [showBtn, setshowBtn] = useState(false);
  const [countError, setcountError] = useState();

  const increment = () => {
    setCount(count + 1);
    setcountError("");
    if (count > 9) {
      setshowBtn(true);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setcountError("Error: Cannot go below 0 🚀");
    }
    if (count <= 11) {
      setshowBtn(false);
    }
  };

  const clear = () => {
    if (count > 0) {
      setCount(0);
      setshowBtn(false);
    }
    setcountError("");
  };
  
  return (
    <div className="App">
      <header className="App-header">
      
        <h1>Counter using React</h1>
        <p className="para">Your Current Count is : <b>{count}</b></p>

        <p className="error">{countError}</p>

        <div className="btn_div">
          <button className="btn" onClick={decrement}>Decrement</button>
          <button className="btn" onClick={increment}>Increment</button>
          {
            showBtn?<button className="btn btn1" onClick={clear}>Go Back to 0</button>:null
          }
        </div>
      </header>
    </div>
  );
}

export default CounterComponent;
