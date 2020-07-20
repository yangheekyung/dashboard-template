import React from 'react';
import {wrapper} from "../store";
import dashboard from "../store/actions/dashboard";
import Layout from '../components/layout';
import Head from "next/head";
// import 'fontsource-roboto';

const MyApp = ({Component, pageProps}) => (
  <>
    <Head>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  </>
);

MyApp.getInitialProps = async ({Component, ctx}) => {
  const user = ctx.req.session?.passport?.user;
  ctx.store.dispatch(dashboard.init(user));

  return {
    pageProps : {
      ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
    }
  }
}

export default wrapper.withRedux(MyApp);