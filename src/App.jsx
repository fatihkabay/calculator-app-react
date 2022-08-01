import React from 'react'
import "./App.css"
import "./styles.css"


function App() {
  return (
    <div className='container'>
      <div className="output">
        <div className="previous-operand">123,456</div>
        <div className="current-operand">123,456</div>
      </div>
      <button className='span-two'>AC</button>
      <button>DEL</button>
      <button>/</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>x</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button className='span-two'>0</button>
      <button>=</button>
    </div>
  )
}

export default App