import { useState } from "react";
import { CounterType } from "../data/types";
import "../styles.css";
interface CounterProps {
  counter: CounterType;
}
export default function Counter({ counter }: CounterProps) {
  const [val, setVal] = useState<number>(counter.value);
  return (
    <span style={{ margin: "5px" }}>
      <span
        onClick={() => {
          if (val > 0) setVal(val - 1);
        }}
      >
        -
      </span>
      {val} {counter.name}
      <span onClick={() => setVal(val + 1)}>+</span>
    </span>
  );
}
