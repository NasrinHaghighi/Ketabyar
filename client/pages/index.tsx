import Head from 'next/head'
import type { NextPage } from "next";
import PageWithLayoutType from "../types/layout";
import MainLayout from "../Layout/MainLayout";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Slider from "../components/LandingPage/Slider/SliderCo";
import Features from '@/components/LandingPage/Features/Features';
import Category from '@/components/LandingPage/Category/Category';
import MovingBanner from '@/components/LandingPage/MovingBanner/MovingBanner';
import ReactVerticalTimelineComponentTests from '@/components/LandingPage/Timeline/TimeLine';
import Aduio from '@/components/LandingPage/Audio/Aduio';
const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {

  return (
    <>
      <Slider />
      <Features /> 
   <Category />
   <MovingBanner />
   
     {/*<Discount id='discont'/>*/}
   
    <Aduio />
    <ReactVerticalTimelineComponentTests /> 

    </>
  );
};
(Home as PageWithLayoutType).layout = MainLayout;
export default Home;