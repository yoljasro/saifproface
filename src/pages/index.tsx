import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.sass";
import { Navbar } from "@/components/Navbar";
import { Header } from "@/components/Header";
import About  from "@/components/About";
import { Reviews } from "@/components/Reviews";
import YandexMap from "@/components/Map";
import type { NextPage, GetStaticProps } from "next";
import { Courses } from "@/components/Courses";
import { Footer } from "@/components/Footer";
import { Teachers } from "@/components/Teachers";
import {Prices}  from "@/components/Prices";
import 'swiper/swiper-bundle.css'; // Yangi versiyalar uchun to'g'ri yo'l

import { Learn } from "@/components/Learn";
import { Nav } from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Saif ProFace</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/img/ceoimgorg.png" />
      </Head>
      {/* <Navbar/> */}
      <Nav/>
      <Header/>
      <About/>
      {/* <Courses/> */}
      {/* <Learn/> */}  
      {/* <Reviews/> */}
      <Teachers/>
      <Prices/>
      <YandexMap/>
      {/* <Map/> */}
      <Footer/>
    </>
  );
}


export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};