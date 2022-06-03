import React from "react";
import styles from "./cards.module.css"

const Cards = (props) => {
  return (
    <div className={styles.cards}>
      <h1>{props.heading}</h1>
      <li>{props.L1}</li>
      <li>{props.L2}</li>
      <li>{props.L3}</li>
      <li>{props.L4}</li>
    </div>
  );
};

export default Cards;