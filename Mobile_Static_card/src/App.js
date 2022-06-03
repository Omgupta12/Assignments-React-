import "./App.css";
import Cards from "./components/Cards";

function App() {
  const cardsData = [
    {
      heading: "Mobile Operating System",
      L1: "Android",
      L2: "Blackberry",
      L3: "iPhone",
      L4: "Windows Phone",
    },
    {
      heading: "Mobile Manufacturers",
      L1: "Samsung",
      L2: "HTC",
      L3: "Micromax",
      L4: "Apple",
    },
  ];
  return (
    <div className="App">
      {cardsData.map((el) => (
        <Cards {...el} />
      ))}
    </div>
  );
}

export default App;
