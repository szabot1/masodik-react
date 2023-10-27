import React, { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = "Kattintasok: " + counter;
  }, [counter]);

  return (
    <div className="card w-25 m-5 p-2">
      <p>Kattintasok: {counter}</p>
      <button
        className="btn btn-primary m-2"
        onClick={() => setCounter(counter + 1)}
      >
        Kattints
      </button>
    </div>
  );
}

export default App;
