import Head from 'next/head'
import type { NextPage } from "next";
import PageWithLayoutType from "../types/layout";
import MainLayout from "../Layout/MainLayout";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Slider from "../components/LandingPage/Slider/SliderCo";
import Features from '@/components/LandingPage/Features/Features';


const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {

  return (
    <>
      <Slider />
      <Features /> 
   {/* <CategorySectio />
    
   
    <Discount id='discont'/>
    <MovingBanner />
    <Aduio />
    <ReactVerticalTimelineComponentTests /> */}

    </>
  );
};
(Home as PageWithLayoutType).layout = MainLayout;
export default Home;