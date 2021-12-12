import React from 'react';
import './style.scss'

export default function ColorItem({hex, rgb, id, activeColor, setActiveColor, setCopied}){
    const isActive = hex === activeColor?' color-item--active':'';
    const copyColor = (e) => {
        e.target.select();
        document.execCommand("copy");
        setCopied(e.target.value)
    };
    return(
        <div className={'color-item' + isActive} >
            <div className="color-item__box" style={{'backgroundColor': hex}} onClick={()=>setActiveColor(hex)}></div>
            <input className='color-item__input' type="text" id={'color-item-'+id} value={hex} onClick={e => copyColor(e)}/>
            <label htmlFor={'color-item-'+id}>
                <div className="color-item__color color-item__color--hex">{hex}</div>
                <div className="color-item__color color-item__color--rgb">{rgb}</div>
            </label>
        </div>
    )
}