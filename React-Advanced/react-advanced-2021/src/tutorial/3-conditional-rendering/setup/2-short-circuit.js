import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      <h1>{text || "Abylay"}</h1>
      <button className="btn" onClick={() => setIsError((prev) => !prev)}>
        toggle Error
      </button>
      {isError && <h1>Error ...</h1>}
      {isError ? <p>there is an error</p> : <div>no error</div>}
    </>
  );
};

export default ShortCircuit;
