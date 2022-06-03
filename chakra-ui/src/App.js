import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

const dateinputNames = [
  {
    label: "EXPIRY MONTH",
    placeholder: "mm",
    name: "month",
    maxlength: "2",
  },
  {
    label: "EXPIRY YEAR",
    placeholder: "yyyy",
    name: "year",
    maxlength: "4",
    myref: "yearRef",
  },
  {
    label: "CVV",
    placeholder: "cvv",
    name: "cvv",
    maxlength: "3",
  },
];

function App() {
  const [form, setForm] = useState([]);
  return (
    <div className="App">
      <img src="https://img.freepik.com/free-vector/vector-red-credit-card-mockup-isolated-white-background-realistic-payment-card_567896-200.jpg?w=2000" />
      <Form form={form} setForm={setForm} dateinputNames={dateinputNames} />
    </div>
  );
}

export default App;