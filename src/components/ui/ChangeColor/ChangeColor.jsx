import React, { useRef} from 'react'
import './changeColor.css'

export const ChangeColor = () => {

    const container = useRef();

    const handleChangeColor = event => container.current.style.backgroundColor = event.target.value;
    
  return (
    <div className='container-change-color'>
        <div ref={container} className="object"><p className='parrafo'>Color</p></div>
        {/* <label htmlFor="input-color" className='label-color'>Seleccione el color</label> */}
        <input onChange={handleChangeColor} type="color" name="" id="input-color" />
    </div>
  )
}