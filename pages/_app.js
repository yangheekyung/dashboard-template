import React, {useEffect} from 'react';
import App from 'next/app';
import Head from "next/head";
import Layout from '../components/layout';
import {wrapper} from "../store";
import {init} from '../store/dashboard/action';
import {CssBaseline} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../librarys/material';

const MyApp = ({Component, pageProps}) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </ThemeProvider>
    </>
  )
};

MyApp.getInitialProps = async (appContext) => {
  const {
    ctx : {
      req : {
        user
      },
      store : {
        dispatch
      }
    }
  } = appContext

  dispatch(init(user));
  return await App.getInitialProps(appContext);
}

export default wrapper.withRedux(MyApp);