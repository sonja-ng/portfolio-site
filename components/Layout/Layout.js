import React from 'react';
import Head from 'next/head';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Layout({ children }) {

    const meta = {
        title: "Sonja Ng",
        description: `Sonja Ng portfolio`,
        image: "/images/portfolio.png",
        type: "website",
      };

      return (
        <div>
          <Head>
            <title>Sonja Ng</title>
            <meta name="robots" content="follow, index" />
            <meta content={meta.description} name="description" />
            <meta property="og:type" content={meta.type} />
            <meta property="og:site_name" content="Sonja Ng" />
            <meta property="og:description" content={meta.description} />
            <meta property="og:title" content={meta.title} />
            <meta property="og:image" content={meta.image} />
            <link rel="icon" href="/favicon.ico" />
            
          </Head>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
      );
}