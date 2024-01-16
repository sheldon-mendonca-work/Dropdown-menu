import React, { createContext, useState } from "react";
import Chips from "../models/chips";

type chipsContextObj = {
    dropdownItems: Chips[];
    inputItems: Chips[];
    inputText: string;
    itemIndex: number;
    addChip: (id:string)=>void;
    updateSearchText: (inputText: string)=>void;
    removeChip: (id:string)=>void;
    updateItemIndex: (index: number)=>void;
}

const initInputChips: Chips[] = [];

const initDropDownChips: Chips[] = [
    {id: "1", name: "Sheldon Mendonca", email: "sheldonmendonca1012@gmail.com", image: "profileImg/3ifAqala_400x400.jpg"},
    {id: "2", name: "ipsum dolor", email: "sitametconsectetur@gmail.com", image: "profileImg/default-user-image.png"},
    {id: "3", name: "adipisicing elit", email: "doloresdolore@gmail.com", image: "profileImg/Jp2_LEBL_400x400.jpg"},
    {id: "4", name: "Consequatur ab vel", email: "doloresdolore@gmail.com", image: "profileImg/1-intro-photo-final.jpg"},
    {id: "5", name: "dolorum voluptatem", email: "perspiciatisanimi@gmail.com", image: "profileImg/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"},
    {id: "6", name: "sit fuga dolores", email: "Quaeratdolores@gmail.com", image: "profileImg/ai.jpg"},
    {id: "7", name: "adipisicing elit", email: "doloresdolore@gmail.com", image: "profileImg/ai14.jpg"},
    {id: "8", name: "Consequatur ab vel", email: "doloresdolore@gmail.com", image: "profileImg/K9zDF6YG_400x400.jpg"},
    {id: "9", name: "dolorum voluptatem", email: "perspiciatisanimi@gmail.com", image: "profileImg/im2ages.jpeg"},
    {id: "10", name: "sit fuga dolores", email: "Quaeratdolores@gmail.com", image: "profileImg/images.jpeg"},
    {id: "11", name: "adipisicing elit", email: "doloresdolore@gmail.com", image: "profileImg/Jp2_LEBL_400x400.jpg"},
    {id: "12", name: "Consequatur ab vel", email: "doloresdolore@gmail.com", image: "profileImg/K9zDF6YG_400x400.jpg"},
    {id: "13", name: "dolorum voluptatem", email: "perspiciatisanimi@gmail.com", image: "profileImg/default-user-image.png"},
    {id: "14", name: "sit fuga dolores", email: "Quaeratdolores@gmail.com", image: "profileImg/K9zDF6YG_400x400.jpg"},
]

export const ChipsContext = createContext<chipsContextObj>({
    dropdownItems: [],
    inputItems: [],
    addChip: (id:string)=>{},
    removeChip: (id: string)=>{},
    updateSearchText: (inputText: string)=>{},
    inputText: "",
    itemIndex: -1,
    updateItemIndex: (index: number) => {}
});

export const ChipsProvider: React.FC<{children: React.ReactNode}> = (props) => {
    const [ dropdownItems, setDropdownItems ] = useState<Chips[]>(initDropDownChips);
    const [ inputItems, setInputItems ] = useState<Chips[]>(initInputChips);
    const [ inputText, setInputText ] = useState<string>("");
    const [ itemIndex, setItemIndex ] = useState<number>(-1);
  
    
    /* 
        Removes chip from dropdown list and adds chip to input chip list using "id".
        Sets input text to blank when added.
    */
    const addChipHandler = (_id:string) => {
        const newChip = dropdownItems.find((item) => _id === item.id);
        
        if(!newChip){
            console.log("Chip not found");
            return;
        }
        
        setDropdownItems((prevState) => prevState.filter((item) => item.id !== _id));
        setInputItems((prevState) => (prevState.concat(newChip)));
        setInputText("")
    }

    /* 
        Adds chip to input chip list using "id".
        Sets input text to blank when added.
    */

    const removeChipHandler = (_id: string) => {
        const newChip = inputItems.find((item) => _id === item.id);
        
        if(!newChip){
            console.log("Chip not found");
            return;
        }
        
        setInputItems((prevState) => prevState.filter((item) => item.id !== _id));
        setDropdownItems((prevState) => (prevState.concat(newChip)))
    }

    const updateSearchTextHandler = (inputText: string) => {
        setInputText(inputText);
    }

    const updateItemIndexHandler = (index: number) => {
        setItemIndex(index);
    }

    const contextValue:chipsContextObj = {
        dropdownItems,
        inputItems,
        addChip: addChipHandler,
        removeChip: removeChipHandler,
        updateSearchText: updateSearchTextHandler,
        inputText,
        itemIndex,
        updateItemIndex: updateItemIndexHandler
    }

    return <ChipsContext.Provider value={contextValue}>
        {props.children}
    </ChipsContext.Provider>
}