import styled from "styled-components";
import scenes from "./data.js";
import Welcome from "./components/Welcome";
import { Scene } from "./components/scene/Scene.jsx";
import { Buttons } from "./components/scene/Buttons.jsx";
import { useState } from "react";

import "./App.css";


const App = () => {
  const [firstTime, setFirstTime] = useState(true);
  const [index, setIndex] = useState(1);

  function handleInit() {
    setFirstTime(false);
  }

  function handleButtonPrevius() {
    index === 1 ? setIndex(scenes.length) : setIndex(index - 1);    
  }

  function handleButtonNext() {
    index === scenes.length ? setIndex(1) : setIndex(index + 1);
  }

  if (firstTime) {
    return (
      <div>
        <Welcome init={handleInit} />
      </div>
    );
  } else {
    return (
      <>
        <Buttons previus={handleButtonPrevius} next={handleButtonNext} />
        {scenes.map((scene) => (
          <Scene
            key={scene.id}
            id={scene.id}
            sentence={scene.txt}
            index={index}
          />
        ))}
      </>
    );
  }
};

export default App;
