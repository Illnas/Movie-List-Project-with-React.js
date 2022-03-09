import React from 'react'

const Sandbox = (props) => {

    let totalPrice = props.price * props.quantity
    const priceDiscount = props.discount

    if (props.quantity >= 5) {
        totalPrice = totalPrice - totalPrice / 100 * priceDiscount
    }

    return (
        <div>
            Cijena ovih proizvoda je: {totalPrice}
            <hr />
            <div>
                Ime i prezime korisnika: {props.name}
            </div>
        </div>
    )
}

export default Sandbox
