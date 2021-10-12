import React, { Component } from 'react';
import {AppBar,Toolbar,Typography,InputBase,Box} from '@material-ui/core';
import Beers from '../Beer/beers';
import useStyles from './styles';
const Header = () => {
  const classes = useStyles();
    return (
      <AppBar>
        <Toolbar className={classes.toolbar}>
        <Typography variant= "h5" className={classes.title}>
           Beer Information
        </Typography>

        </Toolbar>
      </AppBar>
     
      
    );
  
}

export default Header;
