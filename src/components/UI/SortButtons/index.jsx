import React from "react";
import './styles.css'

const SortButtons = ({items, setItems}) => {
    let temp = [...items];
    return (
        <div className='sort'>
            <div>Сортировать по выполнению:</div>
            <div className='sort__buttons'>
                <button className='sort__button' onClick={() => {
                    temp.sort((a, b) => {
                        return b.isDone - a.isDone;
                    });
                    setItems(temp);
                }}>Сначала выполненные
                </button>
                <button className='sort__button' onClick={() => {
                    temp.sort((a, b) => {
                        return a.isDone - b.isDone;
                    });
                    setItems(temp);
                }}>Сначала невыполненные
                </button>
            </div>
        </div>
    )
}

export default SortButtons;