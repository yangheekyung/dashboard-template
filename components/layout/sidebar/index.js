import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import cx from 'classnames';
import {
  Drawer,
  makeStyles,
  Hidden,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import {sidebarToggle as sidebarToggleAction} from '../../../store/dashboard/action';
import Test from '../../test';

const useStyle = makeStyles((theme) => ({
  drawer : ({sidebar : {sidebarWidth}}) => ({
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('sm')]: {
      width: sidebarWidth,
      flexShrink: 0,
    }
  }),
  drawerOpen : ({sidebar : {sidebarWidth}}) => ({
    width : sidebarWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  drawerClose : () => ({
    width: theme.spacing(10),
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  }),
  drawerPaper : ({sidebar : {sidebarWidth}}) => ({
    width : sidebarWidth
  }),
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
}));

const Sidebar = () => {
  const {
    layout,
    layout : {
      common : {
        sidebarToggle
      }
    },
  } = useSelector(state => state.dashboard);
  const dispatch = useDispatch();
  const style = useStyle(layout);

  const sidebarHandler = () => {
    dispatch(sidebarToggleAction())
  };

  const drawer = (
    // <List>
    //   {
    //     (layout?.sidebar?.list || []).map(({title, icon}, index) => {
    //       const Icon = Icons[icon];
    //       return (
    //         <ListItem button key={index}>
    //           <ListItemIcon><Icon/></ListItemIcon>
    //           <ListItemText primary={title}/>
    //         </ListItem>
    //       )
    //     })
    //   }
    // </List>
    <Test/>
  );

  return (
    <nav>
      <Hidden smUp implementation={`js`}>
        <Drawer
          className={style.drawer}
          variant="temporary"
          open={sidebarToggle}
          onClose={sidebarHandler}
          classes={{
            paper: style.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <div className={style.toolbar}>
            <Typography variant="h6">
              Dashboard
            </Typography>
          </div>
          <Divider />
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation={`js`}>
        <Drawer
          variant="permanent"
          className={cx(style.drawer, {
            [style.drawerOpen] : sidebarToggle,
            [style.drawerClose] : !sidebarToggle
          })}
          classes={{
            paper: cx({
              [style.drawerOpen] : sidebarToggle,
              [style.drawerClose] : !sidebarToggle
            }),
          }}
        >
          <div className={style.toolbar}/>
          <Divider />
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  )
} 

export default Sidebar;