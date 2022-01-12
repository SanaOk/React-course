import React from "react";
import ToDoListItem from "../ToDoListItem";
import './styles.css'

const ToDoList = ({items, setItems, filteredItems}) => {
    if (items.length) {
        return (
            <ul className='items'>
                {filteredItems.map((el, i) => {
                    return (
                        <ToDoListItem
                            items={items}
                            setItems={setItems}
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