import { Inter } from '@next/font/google';
import Carousel from 'components/Channels';
import Contact from 'components/Contact';
import FAQSection from 'components/FaqSection';
import Features from 'components/Features/Features';
import Layout from 'components/Header/Layout';
import Hero from 'components/Home';
import PlansSection from 'components/Plans';
import Reasons from 'components/Reasons';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <>
        <Hero />
        <Features />
        <Carousel />
        <Reasons />
        <PlansSection />
        {/* <FAQSection/> */}
        <Contact />
      </>
    </Layout>
  );
}
