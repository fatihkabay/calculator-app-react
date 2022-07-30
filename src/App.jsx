import "./App.css";
import Calculator from "./componenets/calculator";
function App() {
  return (
    <div className="container">
      
      <div className="app-calc">
        <span className="created-name">Created by Fatih Kabay</span>
        <div className="calc-wrapper">
          <input className="calc-input" type="text" disabled  />
          <hr />
         <Calculator/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
