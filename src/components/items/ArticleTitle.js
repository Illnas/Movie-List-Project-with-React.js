import React from 'react'

const ArticleTitle = (props) => {
  return (
    <div className='details'>
       <h3>
      {!props.movieName ? "Hangover" : props.movieName}
    </h3>

    <h4>Year: {props.movieYear}</h4>
    </div>
   
  )
}

export default ArticleTitle
