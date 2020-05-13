// @flow

import React from 'react';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

type Props = {
  children?: any,
  title?: string,
};

const Page = ({ children, title, ...restProps }: Props) => (
  <div {...restProps}>
    <Head>
      <title>{title || 'Teste Petz'}</title>
    </Head>
    {children}
  </div>
);

export default Page;
