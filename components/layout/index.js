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
  toolbar : theme.mixins.toolbar
}))

const Layout = ({children, options = {
  header : {},
  sidebar : {
    width : 240
  },
  main : {}
}}) => {
  const style = useStyles();
  return (
    <div className={style.root}>
      <Header options={options}/>
      {/* <Sidebar options={options}/> */}
      <main className={style.content}>
        <div className={style.toolbar}/>
        {children}
      </main>
    </div>
  )
}

export default Layout;