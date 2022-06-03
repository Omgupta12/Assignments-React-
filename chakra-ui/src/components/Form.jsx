import React, { useRef, useState } from "react";
// import "../App.css";
import {
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Form = ({ form, setForm, dateinputNames }) => {
  const nameRef = useRef();
  const cardRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();
  const cvvRef = useRef();

  const handleChange = (e) => {
    let { name, value, card, month, year, cvv } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.card || !form.month || !form.year || !form.cvv)
      alert("Please fill all the details");

    if (form.name && form.card && form.month && form.year && form.cvv) {
      console.log(form);
    }
  };

  return (
    <div className="formdiv">
      <p className="heading">Payment Details</p>

      <label>Cardholder Name</label>
      <InputGroup borderColor="transparent" borderBottom="1px solid red">
        <InputLeftElement
          pointerEvents="none"
          children={<AccountCircleOutlinedIcon style={{ color: "red" }} />}
        />
        <Input
          type="text"
          placeholder="Enter Name"
          id="myinput"
          name="name"
          onChange={handleChange}
          ref={nameRef}
        />
      </InputGroup>
      <label>Card Number</label>
      <InputGroup borderColor="transparent" borderBottom="1px solid red">
        <InputLeftElement
          pointerEvents="none"
          children={<CreditCardIcon style={{ color: "red" }} />}
        />
        <Input
          type="tel"
          placeholder="Card Number"
          id="myinput"
          name="card"
          maxLength="16"
          onChange={handleChange}
          ref={cardRef}
        />
      </InputGroup>

      <div className="datebox">
        {dateinputNames.map((el) => {
          return (
            <div key={el.placeholder} className="dateboxelem">
              <label>{el.label}</label>
              <InputGroup
                borderColor="transparent"
                borderRadius="0"
                borderBottom="1px solid red"
              >
                <InputLeftElement
                  pointerEvents="none"
                  children={<CreditCardIcon style={{ color: "red.300" }} />}
                />
                <Input
                  type="tel"
                  placeholder={el.placeholder}
                  id="myinput"
                  name={el.name}
                  onChange={handleChange}
                  maxLength={el.maxlength}
                />
              </InputGroup>
            </div>
          );
        })}
      </div>
      <h3 className="payment">Payment amount: Rs 500</h3>
      <div className="btn">
        <Button colorScheme="red" px="4%" onClick={handleSubmit}>
          Button
        </Button>
      </div>
    </div>
  );
};

export default Form;