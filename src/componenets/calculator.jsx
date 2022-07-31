import React, {useRef, useEffect, useState } from 'react'
import './calculator.css'
import { btns, BTN_ACTIONS } from './btnConfig';

const Calculator = () => {

const btnsRef = useRef(null);
const expRef = useRef(null);

const [expression, setExpression] = useState()

useEffect(() => {
    const btns = Array.from(btnsRef.current.querySelectorAll('button'));
    btns.forEach(e => e.style.height = e.offdetWidth + 'px');
}, []);

const btnClick = (item) => {
    const expDiv = expRef.current;
    if(item.action === BTN_ACTIONS.ADD) {
        addAnimSpan(item.display);
        const oper = item.display !== 'x' ? item.display : '*';
        setExpression(expression + oper);
    }
    if (item.action === BTN_ACTIONS.DELETE) {
        expDiv.parentNode.querySelector('div:last-child').innerHTML='';
        expDiv.innerHTML='';

        setExpression('');
    }
    if (item.action === BTN_ACTIONS.CALC) {
        if (expression.trim().lenght <= 0) return;
        expDiv.parentNode.querySelector('div:last-child').remove();
        const cloneNode = expDiv.cloneNode(true);
        expDiv.parentNode.appendChild(cloneNode);
        const transform = `translateY(${-(expDiv.offsetHeight +10) + 'px'}) scale(0.4)`;
    
        try {
          let res = (expression);
          setExpression(res.toString());
          setTimeout(() => {
             cloneNode.style.transform = transform;
             expDiv.innerHTML = '';
             addAnimSpan(Math.floor(res* 10000000) / 100000000)

          }, 200);
        } catch {
            setTimeout(() => {
                cloneNode.style.transform = transform;
                cloneNode.innerHTML = 'Sytnax err';
            }, 200);
        } finally {
            console.log('calc complete');
        }

    }
}
 const addAnimSpan = (content) => {
    const expDiv = expRef.current;
    const span =document.createElement('span');
 
    span.innerHTML = content;
    span.style.opacity = '0';
    expDiv.appendChild(span)

    const width = span.offsetWidth + 'px';
    span.style.width = '0';


    setTimeout(() => {
        span.style.opacitiy = '1';
        span.style.width = width;
    }, 100);
 }
  return (
    
    <div className="calculator">
       <span className="created-name">Created by Fatih Kabay</span>
        <div className='calculator_result'>
            <input ref={expRef} className="calculator-result-exp">

            </input>
        </div>
          
        <div ref={btnsRef} className="calculator-btns">
            {
                btns.map((item, index) => ( 
                    <button 
                         key={index}
                         className={item.class}
                         onClick={()=> btnClick(item)}
                         >
                        {item.display}
                    </button>
                ))
            }
        </div>
        </div>
        
  )
}

export default Calculator