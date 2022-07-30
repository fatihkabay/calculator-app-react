import "./App.css";
import Calculator from "./componenets/calculator";
function App() {
  return (
    <div className="container">
      <span>Calc-u-later</span>
      <div className="app-calc">
        <div className="calc-wrapper">
          <input className="calc-input" type="text" />
          <hr />
         <Calculator/>
        </div>
      </div>
    </div>
  );
}

export default App;
