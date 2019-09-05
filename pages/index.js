import React from "react";
import Head from "next/head";

const Home = () => (
  <div>
    <Head>
      <title>Enchanted Life Goods</title>
    </Head>

    <div className="hero">
      <h1 className="title">ELG SANITY CHECK</h1>
    </div>

    <style jsx>{`
      .hero {
        background: yellow;
        width: 100vw;
        height: 100vh;
        margin: 0;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .title {
        color: purple;
      }
    `}</style>
    <style global jsx>{`
      body {
        margin: 0;
        height: 100vh;
        width: 100vw;
      }
    `}</style>
  </div>
);

export default Home;
