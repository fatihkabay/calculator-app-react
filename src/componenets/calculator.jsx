import React from 'react'
import './calculator.css'
import { btns, BTN_ACTIONS } from './btnConfig';


const calculator = () => {
  return (
    <div className="calculator">
        <div className="calculator-btns">
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

export default calculator