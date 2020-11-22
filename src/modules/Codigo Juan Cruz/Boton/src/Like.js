import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Label} from 'reactstrap';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Avatar from '@material-ui/core/Avatar';

// TODO SOBRE EL ME GUSTA CON EL CONTADOR
function App() {
  return (
    <div>
    <Button variant="contained" color="primary" size="small">
    Me gusta 
    </Button> 
    <p>   </p>
    <ThumbUpIcon color="primary" />
    <p>  </p>
    <FormControlLabel
        control={<Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />} name="checkedH" />}
        label="Me gusta"
      />
    </div>
  );
}




//clase que hizo lau para el contador
class Like extends React.Component {
  state = {
      likes: 0
    };

    addLike = () => {
            
        this.setState({
        likes: this.state.likes + 1,  
      });
    };
   
    

  render() {   
     
      return(
    <div>
      <div>
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />} name="checkedH" />}
        label="Me gusta" onClick={this.addLike} />
      <Label > {this.state.likes}</Label>
      </div>
        
      <div>
        

      </div>
    </div>
      )
    }
  }

 //<Avatar>CS</Avatar> esto estaria dentro de "Nosotros" dentro del timeline
export default Like;