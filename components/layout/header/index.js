import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import {Menu as MenuIcon} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  appBar : ({sidebar : {width}}) => ({
    [theme.breakpoints.up('sm')] : {
      width : `calc(100% - ${width}px)`,
      marginLeft : width
    }
  }),
  menuButton : {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

const Header = ({options}) => {
  const style = useStyles(options);

  return (
    <AppBar position="fixed" className={style.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          className={style.menuButton}
        >
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6">
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;