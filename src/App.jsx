import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Count count={count} setCount={setCount} />
    </>
  );
}

const Count = ({ count, setCount }) => {
  return (
    <>
      <div>{count}</div>
      <Buttons count={count} setCount={setCount} />
    </>
  );
};

const Buttons = ({ count, setCount }) => {
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
