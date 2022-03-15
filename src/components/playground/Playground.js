import React, { useState, useEffect } from "react";
import DriversLicense from "./DriversLicense";
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

  const [hide, setHide] = useState(false);
  const hideDriver = () => {
    setHide(!hide);
  };

  /*   useEffect(() => {
    console.log("Mijenjam komponentu")
  }, [hide]) */

  const [inputValues, setInputValues] = useState({
    firstValue: "",
    secondValue: "",
    thirdValue: "",
  });

  const [tableState, setTableState] = useState(false);

  const handleSecondSubmit = (e) => {
e.preventDefault()
    setInputValues({
      firstValue: "",
      secondValue: "",
      thirdValue: "",
    });
  };

  const handleSecondChanges = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    console.log(value);
    setInputValues((oldValues) => ({
      ...oldValues,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={(e) => handleSecondSubmit(e)}>
        <input
          type="text"
          name="firstValue"
          value={inputValues.firstValue}
          onChange={(e) => handleSecondChanges(e)}
        />
        <input
          type="text"
          name="secondValue"
          value={inputValues.secondValue}
          onChange={(e) => handleSecondChanges(e)}
        />
        <input
          type="text"
          name="thirdValue"
          value={inputValues.thirdValue}
          onChange={(e) => handleSecondChanges(e)}
        />
        <input type="submit" value="Submit" />
      </form>

      <button onClick={() => hideDriver()}>Hide Drivers Licence</button>
      {hide && <DriversLicense hide={hide} />}

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
