import React from 'react'
import getRandomArray from '../utils/getRandomArrays'
import phrase from '../utils/phrases.json'



const Button = ({ setPhraseRandom, setNumberImg}) => {

    const handleChangeQuite = () => {
        setPhraseRandom(getRandomArray(phrase))
        setNumberImg(getRandomArray([1, 2, 3, 4]))
    }

    return (
        <button className='App__btn' onClick={handleChangeQuite}>Ver Otro</button>
    )
}

export default Button