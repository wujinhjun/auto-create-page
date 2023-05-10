import { useState } from "react";
import "./App.scss";
function App() {
  //   const url = "";
  const [prompt, setPrompt] = useState<string>("");

  const inputPrompt = (text: string) => {
    setPrompt(text);
  };

  //   const submitPrompt = () => {
  //     console.log("submit");
  //   };

  const create = () => {
    window.parent.postMessage(
      { pluginMessage: { type: "create-rectangles", prompt } },
      "*"
    );
  };

  const cancel = () => {
    window.parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  };

  return (
    <section className="main-page">
      <h2>Figma 网页生成</h2>
      <h3>Prompt: </h3>
      <textarea onChange={(e) => inputPrompt(e.target.value)} />
      <div className="button-group">
        <button id="create" onClick={create}>
          Create
        </button>
        <button id="cancel" onClick={cancel}>
          Cancel
        </button>
      </div>
    </section>
  );
}

export default App;
