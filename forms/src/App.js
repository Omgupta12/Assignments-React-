// import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import {useState} from "react"


function App() {
  const [data,setData] = useState(false);
  function showdata(){
    setData((d)=>{
      return !d;
    })
  }
  return (
    <div className="App">
      <button className="togglebtn" onClick={showdata}>Registaration</button>
      {data ? <Form></Form> : <Table></Table>}


      <br/>
   
    </div>
  );
}

export default App;