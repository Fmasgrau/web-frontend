import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import FooterContainer from '../Footer/FooterContainer';
import NavbarContainer from '../Navbar/NavbarContainer';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className='flex flex-col h-screen'>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
     <NavbarContainer />
    </header>
    {children}
    <footer>
      <FooterContainer />
    </footer>
  </div>
);

export default Layout;
