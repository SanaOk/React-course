import React from "react";
import './styles.css'

const ToDoListItem = ({items, inputData, setItems, id, isDone}) => {
    return (
        <li id={id} className='list__item item'>
            <input
                id={`input-${id}`}
                type="checkbox"
                className='item__checkbox'
                checked={isDone ? 'checked' : ''}
                onChange={() => setItems([...items.map((el, i) => {
                    if(id === i){
                        return {inputData, isDone: !isDone}
                    } else {
                        return el;
                    }
                }
                )])}/>
            <span className='item__text'>
              {inputData}
            </span>
            <button className='item__delete' onClick={() => setItems(items.filter((el, i) => id !== i))}>Удалить</button>
        </li>
    )
}

export default ToDoListItem;