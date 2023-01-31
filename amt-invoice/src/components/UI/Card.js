import React from "react";


import styles from './Card.module.css';

const Card = (props) => {
  const classes = props.className;
  console.log(classes);
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
