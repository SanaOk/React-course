import React from 'react';
import styles from './styles.module.scss'

export default function Input(props){
    return(
        <input className={styles.input} value={props.value} type='number' onChange={props.onChange}/>
    )
}