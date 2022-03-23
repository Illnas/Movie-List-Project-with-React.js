import React, { useState, useContext } from "react";
import { Box, TextField, FormControl, FormGroup, FormControlLabel, Switch, FormLabel, Button} from "@mui/material"
import { movieContext } from "../../App";


const Add = () => {
  const  {movieArr, setMovieArr} = useContext(movieContext);
  const [value, setValue] = useState("Controlled");
  const [checked, setChecked] = useState(true);

  const [moviesObj, setMoviesObj] = useState({
    Name: "",
    Year: 0,
    Description: "",
    Favorites: false,
  });


  const handleChange = (event) => {
    let target = event.target.value;
    let name = event.target.name;
    let checked = event.target.checked;
    setChecked(event.target.checked);
    setValue(event.target.value);
    console.log(event.target.name);
    setMoviesObj((oldObj) => ({
      ...oldObj,
      [name]: target,
    }));
    setMoviesObj((oldObj) => ({
      ...oldObj,
      ["Favorites"]: checked,
    }));
  };



  const addMovie = () => {
   setMovieArr((oldArr) => ([
      ...oldArr,
      moviesObj
    ]))
  };

  

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue="Movie Name"
          onChange={handleChange}
          name="Name"
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Year"
          defaultValue="Movie Year"
          onChange={handleChange}
          name="Year"
        />
      </div>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          defaultValue="Movie Description"
          onChange={handleChange}
          name="Description"
        />
      </div>

      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend">Add to favorites</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={checked || false}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
                name="Favorites"
              />
            }
            label="Add to favorites"
          />
        </FormGroup>
        <Button variant="outlined" onClick={() => addMovie()}>
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};

export default Add;
