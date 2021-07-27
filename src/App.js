import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions";

const App = () => {
  const changeTheNumber = useSelector((state) => state.changeTheNumber);

  const dispatch = useDispatch();

  const handleChange = () => {
    console.log("Hello");
  }

  return (
    <>
      <div className="main-dv">
        <div className="container">
          <h1>Increment / Decrement Counter</h1>
          <h4>using React and Redux</h4>

          <div className="quantity">
            <a
              className="quantity__minus"
              title="Decrement"
              onClick={() => dispatch(decNumber(5))}
            >
              <span>-</span>
            </a>
            <input name="quantity" type="text" className="quantity__input" value={changeTheNumber} onChange={handleChange}/>
            <a
              className="quantity__plus"
              title="Increment"
              onClick={() => dispatch(incNumber(5))}
            >
              <span>+</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
