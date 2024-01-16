import React, { useContext } from "react";
import classes from "./ChipDropdown.module.css";
import { ChipsContext } from "../store/chips-context";
import Chips from "../models/chips";

const ChipDropdown: React.FC<{ items: Chips[] }> = ({ items }) => {
  const { addChip, itemIndex } = useContext(ChipsContext);

  return (
    <ul className={classes.list}>
      {items.map((item, index) => {
        return (
          <li
            key={item.id}
            onClick={addChip.bind(this, item.id)}
            className={`${classes.item} ${itemIndex === index ? classes.hover: ""}`}
          >
            <div className={classes.imgDiv}>
              <img src={item.image} alt={item.name} className={classes.img} />
            </div>
            <div className={classes.name}>{item.name}</div>
            <div className={classes.email}>{item.email}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default ChipDropdown;
