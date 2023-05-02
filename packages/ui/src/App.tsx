import { useState } from "react";

function App() {
  const [count, setCount] = useState(5);

  const create = () => {
    window.parent.postMessage(
      { pluginMessage: { type: "create-rectangles", count } },
      "*"
    );
  };

  const cancel = () => {
    window.parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  };

  return (
    <>
      <h2>title</h2>
      <p>
        Count:{" "}
        <input
          id="count"
          value={count}
          type="number"
          onChange={(e) => setCount(parseInt(e.target.value))}
        />
      </p>
      <div>
        <button id="create" onClick={create}>
          Create
        </button>
        <button id="cancel" onClick={cancel}>
          Cancel
        </button>
      </div>
    </>
  );
}

export default App;
