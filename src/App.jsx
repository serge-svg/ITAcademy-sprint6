import { Scene } from './components/scene/Scene.jsx';
import { Buttons } from './components/scene/Buttons.jsx';
import { MyTitle1 } from './components/MyTitle1.jsx';
import { MyTitle2 } from './components/MyTitle2.jsx';
import './App.css'
import sentences from './data/sentences.json';

const App = () => {    
    console.log('App');
    const title1Value = "Title 1";
    const title2Value = "Title 2";

    return (
    <div>
        <MyTitle1 title={title1Value}/>
        <MyTitle2 title={title2Value}/>

        <Buttons/>
        {
          sentences.map((sentence) => (
            <Scene key={sentence.id} sentence={sentence.value} />    
          )
        )}
    </div>
    );
}

function handleButtonPrevius() {
    console.log('handleButtonPrevius');
}

function handleButtonNext() {
    console.log('handleButtonNext');
}

export default App;