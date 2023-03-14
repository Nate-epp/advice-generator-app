import React from 'react'
import styles from './AdviceInterface.module.css'
import LineBreak from '/Users/nate_epp/Documents/FrontEndPractice/advice-generator-app-main/advice-generator-app/src/images/pattern-divider-desktop.svg'
import Dice from '/Users/nate_epp/Documents/FrontEndPractice/advice-generator-app-main/advice-generator-app/src/images/icon-dice.svg'
import { useState } from 'react'
import { useEffect } from 'react'

function AdviceInterface() {
    const [text, setText] = useState([])
    const fetchAdvice = async() => {
        const res = await fetch('https://api.adviceslip.com/advice')
        const data = await res.json()
        
        setText(data.slip)
    }

    useEffect(()=>{
        fetchAdvice()
    }, [])
       
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <p>ADVICE # {text.id}</p>
        </div>
            <h2>{text.advice}</h2>
            <img className={styles.Linebreak} src={LineBreak} />
        
        <div className={styles.circle} >
            <button onClick={fetchAdvice} type='button'><img src={Dice}/></button>
        </div>
    </div>
  )
}

export default AdviceInterface