import{AppProps} from'next/app';
import '/styles/global.scss';
import { Header } from '../Components/Header';
//import {Provider as NextAuthProdiver} from 'next-auth/client'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }: AppProps) {
    
  return(
    <SessionProvider session={pageProps.session}>
    <Header/>
    <Component {...pageProps} />
   </SessionProvider>
  ) 
}

export default MyApp
