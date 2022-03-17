import React from "react";
import MovieArticle from "../items/MovieArticle";
import { Grid, Paper, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Index = () => {
  let movieArray = [
    { movieName: "Batman", movieYear: "1994", id: 1 },
    { movieName: "Lord", movieYear: "1998", id: 2 },
    { movieName: "Cats", movieYear: "1994", id: 3 },
    { movieName: "Hurray", movieYear: "1992", id: 4 },
    { movieName: "Kill me!", movieYear: "1911", id: 5 },
  ];

  return (
    <div className="article-container">
      <Box sx={{ flexGrow: 1, width: "100%" }}>
        <Grid container spacing={1}>
          {movieArray.map((e) => (
            <Grid item xs={6} sx={{display: "flex", justifyContent: "center", alignItems: "center"}} key={e.id}>
                <MovieArticle
                  movieName={e.movieName}
                  movieYear={e.movieYear}
                  id={e.id}
                />    
            </Grid>
          ))}
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
