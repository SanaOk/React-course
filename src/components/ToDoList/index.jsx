import React from "react";
import ToDoListItem from "../ToDoListItem";
import './styles.css'

const ToDoList = ({items, filteredItems}) => {
    if (items.length) {
        return (
            <ul className='items'>
                {filteredItems.map((el, i) => {
                    return (
                        <ToDoListItem
                            inputData={el.inputData}
                            isDone={el.isDone}
                            id={i}
                            key={i}
                        />
                    )
                })}
            </ul>
        )
    } else {
        return '';
    }
};

export default ToDoList;