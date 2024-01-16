import React, { useContext, useEffect, useRef, useState } from "react";
import classes from "./NewChip.module.css";
import { ChipsContext } from "../store/chips-context";
import ChipInput from "./ChipInput";
import ChipDropdown from "./ChipDropdown";
import Chips from "../models/chips";

const NewChip: React.FC = () => {
  const { inputItems, dropdownItems, inputText, addChip, itemIndex, updateSearchText, updateItemIndex } = useContext(ChipsContext);
  const [searchDropDown, setSearchDropDown] = useState<Chips[]>(dropdownItems);
  
  /*
    If dropdown items change, dropdown items for search are auto updated 
  */
  useEffect(() => {
    setSearchDropDown(dropdownItems);
  }, [dropdownItems]);

  /*
    Partial search can be done either with email or name.
    If search is blank, all dropdown items are shown.
  */
  const textInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value.toLowerCase().trim();
    updateSearchText(event.target.value);

    if (inputText.trim().length === 0) {
      setSearchDropDown(dropdownItems);
    } else {
      setSearchDropDown(
        dropdownItems.filter(
          (item) =>
            item.email.toLowerCase().indexOf(newValue) !== -1 ||
            item.name.toLowerCase().indexOf(newValue) !== -1
        )
      );
    }
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  /*
    Handles keyboard events. 
    - Use the "Up" key to move one dropdown item up;
    - Use the "Down" key to move one dropdown item down;
    - Use the "Enter" key to add item to input chip list; 
  */
  const keyEventHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    
    if(event.key === "ArrowDown"){
        updateItemIndex(Math.min(dropdownItems.length-1,itemIndex+1))
    }else if(event.key === "ArrowUp"){
        updateItemIndex(Math.max(-1,itemIndex-1))
    }else if(event.key === "Enter" && itemIndex >= 0 && itemIndex < dropdownItems.length){
        addChip(dropdownItems[itemIndex].id)
    }
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.chipInputItems}>
        {inputItems.length > 0 && (
          <>
            {inputItems.map((item) => (
              <ChipInput chip={item} key={item.id} />
            ))}
          </>
        )}
        <div className={classes.inputDiv}>
            <input
                type="text"
                id="text"
                placeholder="Add new user..."
                onChange={textInputChangeHandler}
                value={inputText}
                className={classes.input}
                onKeyUp={keyEventHandler}
                onBlur={()=>updateItemIndex(-1)}
            />
          <ChipDropdown items={searchDropDown} />
        </div>
      </div>
    </form>
  );
};

export default NewChip;
