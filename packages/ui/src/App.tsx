import { useState } from "react";
import axios from "axios";

import { actions, INode } from "figma-vite-common/constants";
import helpers from "./utils";

import "./App.scss";
const url = "http://127.0.0.1:3000/api";

function App() {
  const [prompt, setPrompt] = useState<string>("");

  const handlePrompt = (text: string) => {
    setPrompt(text);
  };

  const fetchData = async () => {
    try {
      const res = await axios.post(url, { prompt });
      return res.data;
    } catch (error) {
      throw new Error(error as string);
    }
  };

  const submitPrompt = async () => {
    console.log("submit");
    const res = await helpers.retryFn<INode[]>(fetchData, 3, 1500);
    console.log(res);

    create(res);
  };

  const create = (data: INode[]) => {
    window.parent.postMessage(
      { pluginMessage: { type: actions.CREATE_PAGES, data } },
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
      <textarea onChange={(e) => handlePrompt(e.target.value)} value={prompt} />
      <div className="button-group">
        <button id="create" onClick={submitPrompt}>
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
