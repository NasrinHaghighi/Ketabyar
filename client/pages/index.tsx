import Head from 'next/head'
import type { NextPage } from "next";
import PageWithLayoutType from "../types/layout";
import MainLayout from "../Layout/MainLayout";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Slider from "../components/LandingPage/Slider/SliderCo";



const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {

  return (
    <>
      <Slider />
   {/* <CategorySectio />
    
    <Features id='feat'/> 
    <Discount id='discont'/>
    <MovingBanner />
    <Aduio />
    <ReactVerticalTimelineComponentTests /> */}

    </>
  );
};
(Home as PageWithLayoutType).layout = MainLayout;
export default Home;