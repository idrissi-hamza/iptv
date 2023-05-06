import { Inter } from '@next/font/google';
import Layout from 'components/Header/Layout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout >
      <div className="min-h-full">hello</div>
    </Layout>
  );
}
