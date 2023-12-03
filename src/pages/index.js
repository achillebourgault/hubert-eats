import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from "@/components/globals/Navbar/Navbar";
import Header from "@/components/Header/Header";
import InfoGrid from "@/components/index/InfoGrid/InfoGrid";
import CityProximity from "@/components/index/CityProximity/CityProximity";
import Footer from "@/components/globals/Footer/Footer";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hubert Eats | Livraison de repas et courses à domicile</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
          <Navbar />
          <Header />
          <InfoGrid />
          <CityProximity />
          <Footer />
      </main>
    </>
  )
}
