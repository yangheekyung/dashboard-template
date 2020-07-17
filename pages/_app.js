import React from 'react';
import {wrapper} from "../store";
import dashboard from "../store/actions/dashboard";
import 'fontsource-roboto';

const MyApp = ({Component, pageProps}) => (
  <Component {...pageProps}/>
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