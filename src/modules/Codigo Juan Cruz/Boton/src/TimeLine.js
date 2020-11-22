import React, {Component} from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AccessibilityIcon from '@material-ui/icons/Accessibility';



const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
  }));
  
  export default function CustomizedTimeline() {
    const classes = useStyles();
  
    return (
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <MenuBookIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                HISTORIA
              </Typography>
              <Typography>Nuestra pagina se origino durante una clase de la facultad. En donde tuvimos la idea de desarrollar una pagina web que ayude a encontrar animales perdidos</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
  
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
            <CheckCircleIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
  
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                MISION
              </Typography>
              <Typography>Ayudar a que cada mascota perdida vuelta a su hogar</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
  
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <VisibilityIcon />
            </TimelineDot>
            <TimelineConnector className={classes.primaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                VISION
              </Typography>
              <Typography>Nuestra vision es ser una de las paginas que mas ayudan el encuentro de mascotas</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
  
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
            <AccessibilityIcon />
            </TimelineDot>
            <TimelineConnector className={classes.primaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                NOSOTROS
              </Typography>
              
              <Typography>Caceres, Solange <CheckIcon/></Typography>
              <Typography>Chemin, Juan Cruz<CheckIcon/></Typography>
              <Typography>Gira, Martin<CheckIcon/></Typography>
              <Typography>Guasch, Lautaro<CheckIcon/></Typography>
              <Typography>Raggio, Franco<CheckIcon/></Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    );
  }