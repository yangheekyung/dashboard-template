import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import {Menu as MenuIcon} from "@material-ui/icons";
import {sidebarToggle as sidebarToggleAction} from '../../../store/dashboard/action';

const useStyles = makeStyles((theme) => ({
  appBar : ({sidebar : {sidebarWidth}}) => ({
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${sidebarWidth}px)`,
      marginLeft: sidebarWidth,
    },
  }),
  menuButton : {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
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
    // <AppBar position="fixed" className={cx(style.appBar, {[style.appBarShift] : sidebarToggle})}>
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