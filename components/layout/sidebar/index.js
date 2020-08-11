import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Drawer, Hidden, Divider, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {Inbox as InboxIcon, Mail as MailIcon} from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  drawer : ({sidebarWidth}) => ({
    [theme.breakpoints.up('sm')] : {
      width : sidebarWidth,
      flexShrink : 0
    }
  }),
  drawerPaper : ({sidebarWidth}) => ({
    width : sidebarWidth
  }),
  toolbar : theme.mixins.toolbar
}));

const Aside = ({options}) => {
  const style = useStyle(options);


  const DrawerContents = (
    <div>
      <div className={style.toolbar} />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )


  return (
    <nav className={style.drawer}>
      <Hidden smUp implementation={`js`}>
        <Drawer
          variant="temporary"
          classes={{paper : style.drawerPaper}}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          // open
        >
          {DrawerContents}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation={`js`}>
        <Drawer
          variant="permanent"
          classes={{paper : style.drawerPaper}}
          open
        >
          {DrawerContents}
        </Drawer>
      </Hidden>
    </nav>
  )
};

export default Aside;