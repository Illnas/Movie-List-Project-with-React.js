

import React, { useState } from 'react'
import Sandbox from './Sandbox'

const Playground = () => {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("")

    /*  const [donutPrice, setDonutPrice] = useState(7) */
    const donutPrice = 7
    const discount = 10
    /*     setTimeout(() => {
            myInt += 1
            console.log(myInt)
            setMyAnotherInt(myAnotherInt + 1)
        }, 2000) */

    const counterAdd = () => {
        setCounter(counter + 1)
    }

    const counterRemove = () => {
        if (counter >= 1) {
            setCounter(counter - 1)
        }
    }

    const getName = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    return (
        <div>
            <input type="text" placeholder='Upiši ime i prezime' onChange={(e) => getName(e)}/>




            <hr />
            <button onClick={() => counterAdd()}>Add</button>
            <h1>
                {counter}
            </h1>
            <button onClick={() => counterRemove()}>Remove</button>
            <hr />
            <Sandbox price={donutPrice} quantity={counter} discount={discount} name={name}/>
        </div>
    )
}

export default Playground
