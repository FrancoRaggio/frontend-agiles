import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({item}) {

  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const [color, setColor] = React.useState(false);

  const history = useHistory();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={item?.user?.avatar} className={classes.avatar}>           
          </Avatar>
        }
        title={item.title}
        subheader={item.date}
        
      />
      <CardMedia
        className={classes.media}
        image={item.images[0].url_image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="Black" component="p">
          {item.race}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        </IconButton>
        <IconButton aria-label="share">        
        </IconButton>
        <BottomNavigation
            showLabels
            className={classes.root}
          >
        <BottomNavigationAction label="Likes" icon={<FavoriteIcon style={{color: color ? "red" : "gray"}} />} onClick={() => setColor(!color) } />
        <BottomNavigationAction label="Localizacion" icon={<LocationOnIcon style={{color: "#00aae4"}} />}  onClick={() => history.push("/map") } />
        </BottomNavigation>
        <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
        </IconButton>
      </CardActions>
    </Card>
  );
}

