import React, { useState, useEffect } from "react";

const DriversLicense = (props) => {
  const [driver, setDriver] = useState({
    name: "Driver Name",
    surname: "Driver Surname",
    adress: "Driver Adress",
    birthday: "1928",
    brojCipela: 28,
  });

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

  const [size, setSize] = useState([]);

  const handleSize = (item) => {
    console.log(item);

    console.log(size);

    if (!size.includes(item)) {
      setSize((oldArray) => [...oldArray, item]);
    } else {
      const newArrays = size.filter((word) => word !== item);
      setSize(newArrays);
    }
  };

  const [categories, setCategories] = useState([]);

  const handleDrivers = (category) => {
    if (!categories.includes(category)) {
      setCategories((oldArray) => [...oldArray, category]);
    } else {
      const newArrays = categories.filter((word) => word !== category);
      setCategories(newArrays);
    }
  };

  useEffect(() => {
    console.log("Gotcha");
    alert("Gotcha bish!");

    return () => {
      console.log("Component did unmount");
    };
  }, []);

  const [buttonArray, setButtonArray] = useState(["A1", "A", "B", "C", "C1"]);

  // disabled = {size.includes("s")} === ovo vrace ili false ili true, sto pase sa ovim disabled

  // <div hidden={props.hide}>
  return (
    <div>
      <button onClick={() => handleSize("S")}>S</button>
      <button onClick={() => handleSize("M")}>M</button>
      <button onClick={() => handleSize("L")}>L</button>
      <button onClick={() => handleSize("XL")}>XL</button>

      <br />

      <h2>{size}</h2>

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
        Categories: <span></span>
        {buttonArray.map((e) => (
          <button key={buttonArray.indexOf(e)} onClick={() => handleDrivers(e)}>
            {e}
          </button>
        ))}
        <hr />
        <br />
      </div>

      <div>
        <h4>Name: {driver.name}</h4>
        <h4>Surname: {driver.surname}</h4>
        <h4>Address: {driver.adress}</h4>
        <h4>Category: </h4>
        <table>
          <thead>
            <tr>
              <th>Redni Broj</th>
              <th>Categories</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((e) => (
              <tr key={categories.indexOf(e)}>
                <td>{categories.indexOf(e)}</td>
                <td>{e}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr />
      <br />

      <table>
        <tbody>
          {Object.keys(driver).map((e, i) => (
            <tr key={i}>
              <td>{e}</td>
              <td>{driver[e]}</td>
            </tr>
          ))}
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DriversLicense;
