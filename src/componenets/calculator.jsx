import React, {useRef, useEffect } from 'react'
import './calculator.css'
import { btns, BTN_ACTIONS } from './btnConfig';

const Calculator = () => {

const btnsRef = useRef(null);
const expRef = useRef(null);

useEffect(() => {
    const btns = Array.from(btnsRef.current.querySelectorAll('button'));
    btns.forEach(e => e.style.height = e.offdetWidth + 'px');
}, [])


  return (
    <div className="calculator">
         <input ref={expRef} className="calc-input" type="text" >999</input>
          <hr />
        <div ref={btnsRef} className="calculator-btns">
            {
                btns.map((item, index) => ( 
                    <button key={index} className={item.class}>
                        {item.display}
                    </button>
                ))
            }
        </div>
    </div>
  )
}

export default Calculator