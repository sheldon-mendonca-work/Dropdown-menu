import React, { useContext } from "react";
import classes from './ChipInput.module.css';
import { ChipsContext } from "../store/chips-context";
import Chips from "../models/chips";
import { CrossIcon2 } from "../util/icons";

const ChipInput: React.FC<{chip: Chips}> = (props) => {
    const {chip} = props;
    const {removeChip} = useContext(ChipsContext);
    
    return <div className={classes.item}>
        <div className={classes.imgDiv}>
            <img src={chip.image} alt={chip.name} className={classes.img}/>
        </div>
        <div className={classes.name}>{chip.name}</div>
        <CrossIcon2 className={classes.remove} onClick={removeChip.bind(null, chip.id)} />
    </div>
};

export default ChipInput;