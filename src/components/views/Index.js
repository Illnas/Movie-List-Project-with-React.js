import React, { useContext } from "react";
import MovieArticle from "../items/MovieArticle";
import { Grid, Paper, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { movieContext } from "../../App";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Index = () => {
  const  {movieArr, setMovieArr} = useContext(movieContext);



  return (
    <div className="article-container">
      <Box sx={{ flexGrow: 1, width: "100%" }}>
        <Grid container spacing={1}>
          {movieArr.length > 0 ? movieArr.map((e) => (
            <Grid item xs={6} sx={{display: "flex", justifyContent: "center", alignItems: "center"}} key={e.id}>
                <MovieArticle
                  movieName={e["Name"]}
                  movieYear={e["Year"]}
                  id={e.id}
                />    
            </Grid>
          )) : <div>There are no movies</div>}
     
        </Grid>
      </Box>

    {/*   {movieArray.map((e) => (
        <MovieArticle
          key={e.id}
          movieName={e.movieName}
          movieYear={e.movieYear}
          id={e.id}
        />
      ))} */}
    </div>
  );
};

export default Index;
