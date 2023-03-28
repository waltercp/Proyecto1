import React from 'react'


const Phrases = ({ phraseRandom }) => {
  return (
   <p className='App__phrase'>{phraseRandom.phrase}</p>
  )
}

export default Phrases