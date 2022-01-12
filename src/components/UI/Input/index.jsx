import React from "react";
import './styles.css';

const Input = ({value, setInputData}) => {
    return (
        <input
            className='form__input'
            type="text"
            placeholder='Введите текст...'
            value={value}
            onChange={(e)=>setInputData(e.target.value)}/>
    )
}

export default Input;