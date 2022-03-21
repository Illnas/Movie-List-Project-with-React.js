import React from 'react'
import movieImage from "../Images/movie-image.jpeg"
import CardMedia from '@mui/material/CardMedia';


const ArticleImage = (props) => {
  return (
    <div className='image-container'>
       <CardMedia
        component="img"
        height="140"
        image={props.movieImage}
        alt="green iguana"
      />
    </div>
  )
}

export default ArticleImage
