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
  const [backgroundImage, setBackgroundImage] = useState('./assets/img/1.jpg');

  function handleInit() {
    setFirstTime(false);
  }

  function handleButtonPrevius() {
    index === 1 ? setIndex(scenes.length) : setIndex(index - 1);    
    setBackgroundImage(`./assets/img/${index}.jpg`);
  }

  function handleButtonNext() {
    index === scenes.length ? setIndex(1) : setIndex(index + 1);
    setBackgroundImage(`./assets/img/${index}.jpg`);
  }

  if (firstTime) {
    return (
      <div>
        <Welcome init={handleInit} />
      </div>
    );
  } else {
    return (
      <div className="app-container" 
        style={{ backgroundImage: `url(${backgroundImage})` }} >
        <Buttons previus={handleButtonPrevius} next={handleButtonNext} />
        {scenes.map((scene) => (
          <Scene
            key={scene.id}
            id={scene.id}
            sentence={scene.txt}
            index={index}
          />
        ))}
      </div>
    );
  }
};

export default App;
