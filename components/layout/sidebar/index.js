import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Drawer,Hidden,Divider, Typography} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import {TreeView,TreeItem} from '@material-ui/lab';
import * as Icons from '@material-ui/icons';
import {sidebarToggle as sidebarToggleAction} from '../../../store/dashboard/action';

const useTreeItemStyle = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    '&:hover > $content': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:focus > $content, &$selected > $content': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
      color: 'var(--tree-view-color)',
    },
    '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label, &$selected&:focus > $content $label': {
      backgroundColor: 'transparent',
    },
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '$expanded > &': {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  group: {
    marginLeft: 0,
    '& $content': {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {},
  selected: {},
  label: {
    fontWeight: 'inherit',
    color: 'inherit',
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1,
  },
}));

const StyledTreeItem = (props) => {
  const style = useTreeItemStyle();
  const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;

  return (
    <TreeItem
      label={
        <div className={style.labelRoot}>
          <LabelIcon color="inherit" className={style.labelIcon} />
          <Typography variant="body2" className={style.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      classes={{
        root: style.root,
        content: style.content,
        expanded: style.expanded,
        selected: style.selected,
        group: style.group,
        label: style.label,
      }}
      {...other}
    />
  )
}

const useTreeViewStyle = makeStyles((theme) => ({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
  },
}));

const StyledTreeView = ({list}) => {
  const style = useTreeViewStyle();

  const renderItem = (nodes, parentIndex=0) => (
    nodes.map(({title, icon, children}, childrenIndex) => {
      const index = (parentIndex *10) + (childrenIndex + 1);
      return (
        <StyledTreeItem 
          key={index}
          nodeId={`${index}`}
          labelText={title}
          labelIcon={Icons[icon]}
        >
          {Array.isArray(children) ? renderItem(children, index) : null}
        </StyledTreeItem>
      )
    })
  )

  return (
    <TreeView
      className={style.root}
      defaultCollapseIcon={<Icons.ArrowDropDown/>}
      defaultExpandIcon={<Icons.ArrowRight/>}
    >
      {renderItem(list)}
    </TreeView>
  )
}

const useStyle = makeStyles((theme) => ({
  drawer : ({sidebar : {sidebarWidth}}) => ({
    [theme.breakpoints.up('sm')]: {
      width: sidebarWidth,
      flexShrink: 0,
    },
  }),
  drawerPaper : ({sidebar : {sidebarWidth}}) => ({
    width : sidebarWidth
  }),
  toolbar: theme.mixins.toolbar,
}));

const Sidebar = () => {
  const {
    layout,
    layout : {
      common : {
        sidebarToggle
      },
      sidebar : {
        list
      }
    },
  } = useSelector(state => state.dashboard);
  const dispatch = useDispatch();
  const style = useStyle(layout);

  const sidebarHandler = () => {
    dispatch(sidebarToggleAction())
  };

  const drawer = (
    <div>
      <div className={style.toolbar}/>
      <Divider />
      <StyledTreeView list={list}/>
    </div>
  );

  return (
    <nav className={style.drawer}>
      <Hidden smUp implementation={`js`}>
        <Drawer
          variant="temporary"
          open={sidebarToggle}
          onClose={sidebarHandler}
          classes={{paper: style.drawerPaper}}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation={`js`}>
        <Drawer
          variant="permanent"
          open
          classes={{paper: style.drawerPaper}}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  )
} 

export default Sidebar;