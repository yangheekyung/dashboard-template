import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import cx from 'classnames';
import {
  Drawer,
  makeStyles,
  Hidden,
  Divider,
  Typography,
} from '@material-ui/core';
import {
  TreeView,
  TreeItem
} from '@material-ui/lab';
import * as Icons from '@material-ui/icons';
import {sidebarToggle as sidebarToggleAction} from '../../../store/dashboard/action';


//.MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label
const menuUseStyle = makeStyles((theme) => ({
  test : {
    '& > .MuiTreeItem-content .MuiTreeItem-label' : {
      background :'red'
    }
  }
}));

const Menu = (nodes = []) => {
  const style = menuUseStyle();

  const renderItem = (nodes, parentIndex=0) => (
    nodes.map((node, childrenIndex) => {
      const key = (parentIndex *10) + (childrenIndex + 1);
      const Icon = Icons[node.icon];
      return (
        <TreeItem 
          key={`${key}`} 
          nodeId={`${key}`}
          // collapseIcon={<Icons.ArrowDropDown/>}
          // expandIcon={<Icons.ArrowRight/>}
          // icon={<Icon color="inherit" />}
          label={
            node.title
          }
          classes={{
            selected : style.test
          }}
        >
          {Array.isArray(node.children) ? renderItem(node.children, key) : null}
        </TreeItem>
      )
    })
  )

  return (
    <TreeView 
      className={style.root}
      // defaultCollapseIcon={<Icons.ArrowDropDown/>}
      // defaultExpandIcon={<Icons.ArrowRight/>}
      // defaultEndIcon={<Icons.AccessAlarm/>}
    >
      {renderItem(nodes)}
    </TreeView>
  )
}

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
    }),
  }),
  drawerHover : ({sidebar : {sidebarWidth}}) => ({
    '&:hover' : {
      width: sidebarWidth
    }
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
          {Menu(layout?.sidebar?.list)}
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
              [style.drawerClose] : !sidebarToggle,
              [style.drawerHover] : !sidebarToggle
            }),
          }}
        >
          <div className={style.toolbar}/>
          <Divider />
          {Menu(layout?.sidebar?.list)}
        </Drawer>
      </Hidden>
    </nav>
  )
} 

export default Sidebar;