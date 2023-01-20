import React, { useState } from 'react';
import classes from "./Dropdown.module.css";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const [selectedValue, setSelectedValue] = useState("option1");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="dropdown">
      <button onClick={handleClick}>Menu</button>
      {isOpen && (
        <ul className="dropdown-menu">
          <div >
          <label>
        <input
          type="radio"
          name="options"
          value="option1"
          checked={selectedValue === "option1"}
          onChange={handleChange}/>
        Invoice ID
      </label>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
