import React, { useContext, useState } from 'react'
import { fontSizeContent } from '../../App'
import { Link } from 'react-router-dom'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { Tabs, Tab, Box } from '@mui/material';

const ArticleTitle = (props) => {

/*   const fontSize = useContext(fontSizeContent) 
  const [fontSizeVal, setFontSizeVal] = useState(fontSize) */
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div className='details'>
       <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {!props.movieName ? "Hangover" : props.movieName}
        </Typography>
      </CardContent>
      <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <Tab component={Link} label={`Year: ${props.movieYear}`} to={`/details/${props.id}`} />
        </Tabs>
    </div>

  )
}

export default ArticleTitle
