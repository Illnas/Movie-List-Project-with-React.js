import React, { useState } from "react";
import Sandbox from "./Sandbox";

const Playground = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  /*  const [donutPrice, setDonutPrice] = useState(7) */
  const donutPrice = 7;
  const discount = 10;
  /*     setTimeout(() => {
            myInt += 1
            console.log(myInt)
            setMyAnotherInt(myAnotherInt + 1)
        }, 2000) */

  const counterAdd = () => {
    setCounter(counter + 1);
  };

  const counterRemove = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };

  const getName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [product, setProduct] = useState({
    name: "Sketchers",
    descriptions: "Lorem ipsum dolor sit amet",
    price: 120,
  });

  const user = {
    name: "Nada",
    surname: "Holy",
    email: "gonnaHealALot@exodar.com",
    favorites: ["Heal", "Greater Heal", "Serenity"],
  };

  const [driver, setDriver] = useState({
    name: "Driver Name",
    surname: "Driver Surname",
    adress: "Driver Adress"
})

  const handleUpdate = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setDriver((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    /*  if(name === "name") {
        setProduct(prevValues => ({
            ...prevValues, 
            name: value
          }))
      }

      if(name === "desc") {
        setProduct(prevValues => ({
            ...prevValues, 
            descriptions: value
          }))
      } */
  };



  return (
    <div>
{/*       <h4>Product name: {product.name}</h4>
      <h4>Product description: {product.descriptions}</h4>
      <h4>Product price: {product.price}</h4>

      <br />

      <div>
        <label htmlFor="">Naziv proizvoda</label>
        <input
          onChange={(e) => handleUpdate(e)}
          type="text"
          value={product.name}
          name="name"
        />
        <hr />
        <br />

        <label htmlFor="">Opis proizvoda</label>
        <input
          onChange={(e) => handleUpdate(e)}
          type="text"
          name="descriptions"
          value={product.descriptions}
        />
        <hr />
        <br />

        <label htmlFor="">Cijena proizvoda</label>
        <input
          onChange={(e) => handleUpdate(e)}
          type="text"
          value={product.price}
          name="price"
        />
        <hr />
        <br />
      </div> */}
      <br />
      <hr />

      <div>
      <label htmlFor="">Ime: </label>
        <input
          onChange={(e) => handleUpdate(e)}
          type="text"
          value={driver.name}
          name="name"
        />
        <hr />
        <br />

        <label htmlFor="">Prezime: </label>
        <input
          onChange={(e) => handleUpdate(e)}
          type="text"
          name="surname"
          value={driver.surname}
        />
        <hr />
        <br />

        <label htmlFor="">Adresa: </label>
        <input
          onChange={(e) => handleUpdate(e)}
          type="text"
          value={driver.adress}
          name="adress"
        />
        <hr />
        <br />
      </div>


      <div>
      <h4>Name: {driver.name}</h4>
      <h4>Surname: {driver.surname}</h4>
      <h4>Address: {driver.adress}</h4>
      </div>

      <hr />
      <br />
      <input
        type="text"
        placeholder="Upiši ime i prezime"
        onChange={(e) => getName(e)}
      />
      <hr />
      <br />
      <button onClick={() => counterAdd()}>Add</button>
      <h1>{counter}</h1>
      <button onClick={() => counterRemove()}>Remove</button>
      <hr />
      <br />
      <Sandbox
        price={donutPrice}
        quantity={counter}
        discount={discount}
        name={name}
      />
    </div>
  );
};

export default Playground;
