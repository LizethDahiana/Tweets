import React , {useState, useEffect} from 'react'
import './useState.css'
// import { ContainerUseState } from "../../layouts/ContainerUseState/ContainerUseState";

export const UseState = () => {

  const [counter, setCounter] = useState(0)
  const [color, setColor] = useState('')

  useEffect(() => {
    counter > 9 ? setColor('green') : setColor('black')
  }, [counter])

  return (
    <div className='container'>
        <h1 className={color}>{counter}</h1>
        <button className="btn-increase" onClick={() => setCounter(counter +1)}>+</button>
        <button className='btn-reset' onClick={() => setCounter(0)}>Restart</button>
        <button className="btn-decrease" onClick={() => setCounter(counter -1)}>-</button>
    </div>
  )
}