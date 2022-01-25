import React, {useContext} from "react";
import './styles.css'
import {DataContext} from "../../context";
const ToDoListItem = ({inputData, id, isDone}) => {
    const {items, setItems} = useContext(DataContext);
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