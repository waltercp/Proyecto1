import './App.css'
import Button from './component/Button'
import Phrases from './component/Phrases'
import phases from './utils/phrases.json'
import getRandomArray from './utils/getRandomArrays'
import { useState } from 'react'
import Author from './component/Author'


const imgs = [1, 2, 3, 4]

function App() {




  const [phraseRandom, setPhraseRandom] = useState(getRandomArray(phases))
  const [numberImg, setNumberImg] = useState(getRandomArray(imgs))


  const appStyle = {
    backgroundImage: `url('/bakgrounds/fondo${numberImg}.jpg')`
  }

  const  perforatedTape= {
    backgroundImage: `url('/contentPhrase/imagen2.png')`
  }



  return (
    <div style={appStyle} className='App'>
      <div className='containerTitle'>
        <h1 className='App__title'>GALLETA DE LA FORTUNA</h1>
      </div>
      <div style ={perforatedTape} className='containerPerforatedTape'>
        <div className='containerPhrase'>
          <Phrases phraseRandom={phraseRandom} />
        </div>
      </div>
      <Button
        setPhraseRandom={setPhraseRandom}
        setNumberImg={setNumberImg} />

      <div className='authorPhrase'>
        <p>Autor: </p>
        <Author phraseRandom={phraseRandom}/>
      </div>


  
    </div>

  )
}

export default App
