import Head from 'next/head';
import Helmet from 'react-helmet';
import Banner from '../components/Banner';

import Header from '../components/Header';
import ProposalBanner from '../components/ProposalBanner';
import ProposalsBar from '../components/ProposalsBar';

export default function Home() {
  return (
    <div className="">
      <Helmet bodyAttributes={{ style: 'background-color : #13131A' }} />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <ProposalBanner />
      <ProposalsBar/>

      <main className="pt-20">

      </main>
    </div>
  )
}
