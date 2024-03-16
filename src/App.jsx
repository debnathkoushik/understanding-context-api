import { useState, useContext } from "react";
import "./App.css";
import { CountContext, SetCountContext } from "./Context";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <CountContext.Provider value={count}>
        <SetCountContext.Provider value={setCount}>
          <Count />
        </SetCountContext.Provider>
      </CountContext.Provider>
    </>
  );
}

const Count = () => {
  const setCount = useContext(SetCountContext);
  return (
    <>
      <CountRenderer />
      <Buttons setCount={setCount} />
    </>
  );
};

const CountRenderer = () => {
  const count = useContext(CountContext);
  return (
    <>
      <div>{count}</div>
    </>
  );
};

const Buttons = () => {
  const count = useContext(CountContext);
  const setCount = useContext(SetCountContext);
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </>
  );
};
export default App;
