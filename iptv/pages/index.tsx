import { Inter } from '@next/font/google';
import Carousel from 'components/Channels';
import Features from 'components/Features/Features';
import Layout from 'components/Header/Layout';
import Hero from 'components/Home';
import PlansSection from 'components/Plans';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <>
        <Hero />
        <Features />
        <Carousel />
        <PlansSection />
      </>
    </Layout>
  );
}
