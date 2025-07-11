import { useState } from "react";

function Counter() {
  const [counter, setcounter] = useState(0);
  const plus = counter == 20;
  const minus=counter==0
  return (
    <div>
      <button disabled={plus} onClick={() => setcounter(counter + 1)}>
        +
      </button>
      <span>{counter}</span>
      <button disabled={minus} onClick={() => setcounter(counter - 1)}>-</button>
      <button onClick={() => setcounter(0)}>Reset</button>
    </div>
  );
}

export default Counter;
