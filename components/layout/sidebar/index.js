import React from 'react';
import { Drawer, makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  drawer : ({Sidebar : {width}}) => ({
    [theme.breakpoints.up('sm')] : {
      width : width,
      flexShrink : 0
    }
  }),
  drawerPager : ({sidebar : {width}}) => ({
    width : width
  }),
  toolbar : theme.mixins.toolbar
}));

const Sidebar = ({options}) => {
  return (
    <Drawer></Drawer>
  )
} 

export default Sidebar;