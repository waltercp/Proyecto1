import React from 'react'

const Author = ({ phraseRandom }) => {
  return (
    <p className='author__phrase'>{phraseRandom.author}</p>
  )
}

export default Author