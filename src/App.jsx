import { useState } from 'react';
import './App.css';
import Card from './components/Card.jsx';
import CARD_DATA from './mushrooms.js';
  
const cardSet = JSON.parse(CARD_DATA);

function App() {

  const [cardIdx, setIdx] = useState(0);
  const [defaultFlippedState, toggleDefaultFlippedState] = useState(false);
  const [isFlipped, setFlip] = useState(defaultFlippedState);
  const [isOld, setOld] = useState(false);
  const [isDeadend, setDeadend] = useState(false);
  const [cardOrder, setCardOrder] = useState([...new Array(cardSet.length).keys()]); // initialize to sequential list

  const shuffleCards = () => {
    const array = [...new Array(cardSet.length).keys()];
    for (let i = cardOrder.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]];
    }
    console.log('Cards shuffled: ' + array);
    changeIdx(0);
    setCardOrder(array);
  }

  const changeIdx = (newIdx) => {
    if (newIdx >= cardSet.length || newIdx < 0 ) {
      setDeadend(true);
      setTimeout(()=>{setDeadend(false) }, 200);
    }
    else{
      // setIdx(newIdx)
      setFlip(defaultFlippedState);
      setOld(true);
      setTimeout(()=>{setIdx(newIdx)}, 100);
      setTimeout(()=>{setOld(false) }, 300);
    }
  }

  const toggleFlip = () => {
    setFlip(!defaultFlippedState);
    toggleDefaultFlippedState(!defaultFlippedState);
  }

  const flipCard = () => {
      setFlip(!isFlipped)
  };

  return (
    <>
    <h1>Mushroom Edibility Test</h1>
    <h4>How well do you know your mushrooms? Toxic or not? Would you survive your foraging trip?</h4>
      <div className={'card-container' + (isFlipped ? ' flipped' : '') + (isOld ? ' flyout' : '') + (isDeadend ? ' deadend' : '')} onClick={flipCard}>
        <Card 
          rectoImage     = {cardSet[cardOrder[cardIdx]]["image"]}
          commonName     = {cardSet[cardOrder[cardIdx]]["common-name"]}
          scientificName = {cardSet[cardOrder[cardIdx]]["scientific-name"]}
          edibility      = {cardSet[cardOrder[cardIdx]]["edibility"]}
          colorCode      = {cardSet[cardOrder[cardIdx]]["edibility color code"]}
          />
      </div>

        <div>
          <button onClick={shuffleCards}>Shuffle</button>
          Show first: <button onClick={toggleFlip}>{defaultFlippedState ? 'Back' : 'Front'} </button>
        </div>

        <div className='navigation'>
          <button onClick={() => changeIdx(cardIdx-1)}>⬅</button>
          <div className='counter'>{cardIdx + 1}/{cardSet.length}</div>
          <button onClick={() => changeIdx(cardIdx+1)}>⮕</button>
        </div>
    </>
  )
}

export default App
