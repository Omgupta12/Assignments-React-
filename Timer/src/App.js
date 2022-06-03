
import './App.css';
import Timer from "./components/Timer"

function App() {
  return (
    <div className="App">
     <Timer start={0} end={5}/>
    </div>
  );
}

export default App;
