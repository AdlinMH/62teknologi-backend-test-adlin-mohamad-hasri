import React, { useEffect } from 'react';
import Head from 'next/head';

import prisma from '../lib/prisma';
// import styles from '../styles/Home.module.css';

export default function Home({ businessSearch }: { businessSearch: any[] }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>
        {JSON.stringify(businessSearch)}
      </p>
    </div>
  );
}

export const getServerSideProps = async () => {
  const businessSearch = await prisma.BusinessSearch.findMany()
  console.log(businessSearch)

  return { props: { businessSearch } }
}