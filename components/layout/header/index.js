import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import cx from 'classnames';
import { makeStyles, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import {Menu as MenuIcon} from "@material-ui/icons";
import {sidebarToggle as sidebarToggleAction} from '../../../store/dashboard/action';

const useStyles = makeStyles((theme) => ({
  appBar : () => ({
    zIndex: theme.zIndex.drawer + 1,
    // marginLeft: theme.spacing(10),
    // width: `calc(100% - ${theme.spacing(10)}px)`,
    // transition: theme.transitions.create(['width', 'margin'], {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
  }),
  appBarShift : ({sidebar : {sidebarWidth}}) => ({
    // marginLeft: sidebarWidth,
    // width: `calc(100% - ${sidebarWidth}px)`,
    // transition: theme.transitions.create(['width', 'margin'], {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.enteringScreen,
    // })
  }),
  menuButton : {
    marginRight: theme.spacing(2),
  }
}));

const Header = () => {
  const {
    layout,
    layout : {
      common : {
        sidebarToggle
      }
    },
  } = useSelector(state => state.dashboard);
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