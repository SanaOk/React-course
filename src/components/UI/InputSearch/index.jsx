import React from "react";
import './styles.css'

const InputSearch = ({value, setInputSearchData}) => {
    return (
        <div className='search'>
            <input
                className='search-input'
                type="text"
                placeholder='Начните вводить для поиска...'
                value={value}
                onChange={(e)=>setInputSearchData(e.target.value)}/>
        </div>
    )
}

export default InputSearch;