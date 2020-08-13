import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { makeStyles, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import {Menu as MenuIcon} from "@material-ui/icons";
import {sidebarToggle as sidebarToggleAction} from '../../../store/dashboard/action';

const useStyles = makeStyles((theme) => ({
  appBar : () => ({
    width: `calc(100% - ${theme.spacing(10)}px)`,
    marginLeft:  theme.spacing(10)
  }),
  menuButton : {
    marginRight: theme.spacing(2),
  }
}));

const Header = () => {
  const {layout} = useSelector(state => state.dashboard);
  const dispatch = useDispatch();
  const style = useStyles(layout);

  const sidebarHandler = () => {
    dispatch(sidebarToggleAction())
  };

  return (
    <AppBar position="fixed" className={style.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          className={style.menuButton}
          onClick={sidebarHandler}
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