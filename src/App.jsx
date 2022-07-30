import './App.css';

function App() {
  return (
    <div className="container">
        <span>Calc-u-later</span>
        <div className='calculator'>
          <div className="calc-wrapper">
          <input className='calc-input' type="text" /> 
          </div>
          <div className="calc-buttons">
            <button className='calc-button'></button>
          </div>
        </div>
    </div>
  );
}

export default App;
