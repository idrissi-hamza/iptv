import Head from 'next/head';
import Footer from '../Footer';
import Header from './Header';
import { Inter } from '@next/font/google';
import { Nunito } from '@next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

const Layout = ({
  title,
  keywords,
  description,
  children,
}: {
  title: string;
  keywords: string;
  description: string;
  children: JSX.Element;
}) => {
  return (
    <div
      className={` ${nunito.className}  
     min-h-screen flex  flex-col max-w-8xl mx-auto `}
    >
      <Head>
        <title>{title ? `${title} - YourheroIPTV ` : 'YourheroIPTV'}</title>
        <meta
          name="description"
          content={description}
        />
        <meta
          name="keywords"
          content={keywords}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Header />
      <div className="  flex-1 ">{children}</div>
      <Footer />
    </div>
  );
};
Layout.defaultProps = {
  title: 'YourheroIPTV |',
  description: 'Find your ',
  keywords: 'Movies,Series,Internet,TV,Sports,Fight',
  // TODO to custom later
};

export default Layout;
