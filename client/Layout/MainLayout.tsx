import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer';
import {useRouter} from 'next/router';
interface LayoutProps {
    children: React.ReactNode;
  }

  const MainLayout: React.FC<LayoutProps> = (props) => {
    const router = useRouter()
    
    
     
      return (
        <>
    
    
            <Header />
    
          <main className="sections-wrapper-landing">
            {props.children}
               </main>
          {/* <LandingFooter /> */}
         
          <Footer /> 
        </>
      );
    };
    
    export default MainLayout;