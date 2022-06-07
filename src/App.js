import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className='App'>
      <h1>Payment Card</h1>
      <Card logo="https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg"
        color="orange"
        date={new Date().toLocaleDateString()}
        headerLabelTop="Amazon Gift"
        subHeader="Pay"
        devices={["Desktop","Mobile"]}
        />
        
        <br/>
        <Card logo="https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg"
        color="orange"
        date={new Date().toLocaleDateString()}
        headerLabelTop="Amazon Gift"
        subHeader="Pay"
        devices={["Desktop","Mobile"]}
        />
        <br/>
        <Card 
        logo="https://www.svgrepo.com/show/69341/apple-logo.svg"
        color="light-grey"
        date={new Date().toLocaleDateString()}
        headerLabelTop="Apple Gift"
        subHeader="Pay"
        devices={["MacOS","Mobile"]}/>
    </div>
  );
}

export default App;