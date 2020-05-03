import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'

const useStyles = makeStyles({
  root: {
    maxWidth: 314
  },
  media: {
    height: 431
  }
})

const HeroCard = ({ photo, name, liked }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={photo} title={name}/>
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h5">{ name }</Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          { liked ? <FavoriteIcon color={'primary'}/> : <FavoriteBorderIcon color={'primary'}/>}
        </IconButton>
      </CardActions>
    </Card>
  )
}

HeroCard.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  liked: PropTypes.bool
}

export default HeroCard
