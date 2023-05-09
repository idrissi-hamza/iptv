import Head from 'next/head';
import Footer from '../Footer';
import Header from './Header';
import { Inter } from '@next/font/google';
import { Nunito } from '@next/font/google';
import Image from 'next/image';
import Navbar from './Navbar';

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
     min-h-screen flex  flex-col max-w-8xl mx-auto relative select-none`}
    >
      <Head>
        <title>{title ? `${title} - MOVIPTV ` : 'MOVIPTV'}</title>
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
      {/* <Header /> */}
      <Navbar/>
      <div className="  flex-1 ">{children}</div>
      <Footer />
      <Image
        src="/images/footer.png"
        alt="plans bg image"
        // fill
        className="absolute bottom-0 -z-10"
        width={3000}
        height={3000}
      />
    </div>
  );
};
Layout.defaultProps = {
  title: 'MOVIPTV |',
  description: 'Find your ',
  keywords: 'Movies,Series,Internet,TV,Sports,Fight',
  // TODO to custom later
};

export default Layout;
