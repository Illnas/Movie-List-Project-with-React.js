import React, { useContext, useState } from 'react'
import { fontSizeContent } from '../../App'

const ArticleTitle = (props) => {

  const fontSize = useContext(fontSizeContent) 
  const [fontSizeVal, setFontSizeVal] = useState(fontSize)
  console.log(fontSize)

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
