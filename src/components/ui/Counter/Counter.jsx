import React , {useState, useEffect} from 'react'
import './counter.css'

export const Counter = () => {

  const [counter, setCounter] = useState(0)
  const [color, setColor] = useState('')

  useEffect(() => {
    counter > 9 ? setColor('green') : setColor('black')
  }, [counter])

  return (
    <div className='containerDisplay'>
        <h2 className={color}>{counter}</h2>
        <button className="btn-increase" onClick={() => setCounter(counter +1)}>Aumentar</button>
        <button className='btn-reset' onClick={() => setCounter(0)}>Reiniciar</button>
        <button className="btn-decrease" onClick={() => setCounter(counter -1)}>Disminuir</button>
    </div>
  )
}
