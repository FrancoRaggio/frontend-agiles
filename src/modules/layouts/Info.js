import React from 'react';
import {Button} from 'reactstrap';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import InfoIcon from '@material-ui/icons/Info';
import Box from '@material-ui/core/Box';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  


  
  return (
    <div>
      <Box mt={0.5} ml={182.5}>
      <Button size="small" variant="outlined" color="success" onClick={handleClickOpen}>
        <InfoIcon/>
      </Button>
      </Box>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"¿Necesita ayuda?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            1. Presione Inicio para dirigirse al home principal <br/>
            2. Presione Anuncios para visualizar diversos Anuncios <br/>
            3. Presione Publicaciones para desplegar opciones acerca de ellas <br/>
            4. Presione SobreNosotros para conocer mas sobre este proyecto <br/>
            5. Presione Perfil para dirigirse a su perfil <br/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}