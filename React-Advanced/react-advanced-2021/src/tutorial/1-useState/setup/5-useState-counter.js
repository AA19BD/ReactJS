import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const Reset = () => {
    setValue(0);
  };
  const ComplexIncrease = () => {
    setTimeout(() => {
      setValue((prev) => prev + 1);
    }, 3000);
  };
  return (
    <React.Fragment>
      <section style={{ margin: "4rem 0" }}>
        <h4>Regular counter</h4>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue((prev) => prev + 1)}>
          Increase
        </button>
        <button className="btn" onClick={Reset}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue((prev) => prev - 1)}>
          Decrease
        </button>
      </section>

      <section style={{ margin: "4rem 0" }}>
        <h4>More Complex counter</h4>
        <h1>{value}</h1>
        <button className="btn" onClick={ComplexIncrease}>
          Increase later
        </button>
      </section>
    </React.Fragment>
  );
};

export default UseStateCounter;
