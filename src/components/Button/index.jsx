import React from 'react';
import styles from './styles.module.scss'

export default function Button(props){
    return(
        <button className={styles.button} onClick={props.onClick}>Get random number</button>
    )
}