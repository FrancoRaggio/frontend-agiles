import React from 'react';
import {Button, Input, InputGroup} from 'reactstrap';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Box from '@material-ui/core/Box';
import EditProfile from './EditProfile';


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
      <Box mt={1}ml={13}>
      <Button size="small" variant="outlined" color="success" onClick={handleClickOpen}>
        Editar
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
        <DialogTitle id="alert-dialog-slide-title">{"Editar Perfil"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
              <EditProfile/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose} color="warning">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="success">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}