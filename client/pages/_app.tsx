import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { themes } from "../styles/theme";
import MyGlobalStyle from "../styles/globalStyles";

import MainLayout from "../Layout/MainLayout";
//import MyGlobalStyle from "../styles/globalStyles";
import PageWithLayoutType from "../types/layout";


type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType;
  // pageProps: any;
};

export default function App({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || MainLayout;
  return  (
  <>
     <ThemeProvider theme={themes}>
        <MyGlobalStyle />
    <Layout>
          <Component {...pageProps} />
     </Layout>
     </ThemeProvider>
  </>
  )
}
