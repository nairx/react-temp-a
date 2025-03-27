import React from "react";
import { useState, useEffect,useRef } from "react";
export default function App10() {
  const [num, setNum] = useState(0);
  const numRef = useRef()
  useEffect(() => {
    //some code
  }, [num]);
  return (
    <div>
      <h3>This is App10</h3>
      <p>
        <input type="number" onChange={(e) => setNum(e.target.value)}></input>
      </p>
      <p ref={numRef}>{num}</p>
    </div>
  );
}
