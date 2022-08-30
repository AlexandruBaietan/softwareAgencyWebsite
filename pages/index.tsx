import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Masthead from "components/Masthead";
import AboutUs from "components/AboutUs";
import Skills from "components/Skills";
import Works from "components/Works";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>PMT - software agency website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Masthead />
      <AboutUs />
      <Skills />
      <Works />
    </div>
  );
};

export default Home;
