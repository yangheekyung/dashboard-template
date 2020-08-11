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
  const style = useStyle(options);


  return (
    <nav className={style.drawer}>
      <Hidden smUp implementation={`js`}>

      </Hidden>
      <Hidden xsDown implementation={`js`}>
        
      </Hidden>
    </nav>
  )
} 

export default Sidebar;