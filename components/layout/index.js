import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root : {
    display: 'flex',
  },
  content : {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
}))

const Layout = ({children}) => {
  const style = useStyles();

  return (
    <div className={style.root}>
      <Header/>
      <Sidebar/>
      <main className={style.content}>
        <div className={style.toolbar}/>
        {children}
      </main>
    </div>
  )
}

export default Layout;