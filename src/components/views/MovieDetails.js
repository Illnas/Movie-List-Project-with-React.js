import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card, CardHeader, CardMedia, CardContent, CardActions, Typography, IconButton} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";

const MovieDetails = () => {
  const params = useParams();
  const [movieId, setMovieId] = useState();
  const id = params.id;
  console.log(params);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=6fe1e02&i=${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          console.log(data);
          setMovieId(data);
        }, 2000);
      });
  }, [id]);

  return (
    <div>
      <h1>Detalji Filma</h1>

      {movieId && (
        /*    <div>
          <h2>Name: {movieId["Title"]}</h2>
          <h4>Released: {movieId["Year"]}</h4>

          <img src={movieId["Poster"]} alt="" />
          <p>{movieId["Plot"]}</p>
        </div> */
        <Card sx={{ maxWidth: "40vw" }}>
          <CardHeader title={movieId["Title"]} sx={{ textAlign: "center" }} />
          <CardMedia
            component="img"
            height="300"
            image={movieId["Poster"]}
            alt={movieId["Title"]}
            sx={{ padding: "10px 20px" }}
          />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ padding: "40px" }}
            >
              {movieId["Plot"]}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </CardActions>
        </Card>
      )}
    </div>
  );
};

export default MovieDetails;
