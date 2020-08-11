import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {AppBar, Toolbar, IconButton, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  appBar : ({sidebarWidth}) => ({
    [theme.breakpoints.up('sm')] : {
      width : `calc(100% - ${sidebarWidth}px)`,
      marginLeft : sidebarWidth
    },
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
    <AppBar className={style.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          aria-label="open drawer"
          className={style.menuButton}
          // onClick={handleDrawerToggle}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" noWrap>
          Dashboard
        </Typography>

      </Toolbar>
  </AppBar>
  )
}

export default Header;