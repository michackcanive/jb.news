import{AppProps} from'next/app';
import '/styles/global.scss';
import { Header } from '../Components/Header';
import {Provider as NextAuthProdiver} from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps) {
    
  return(
    <NextAuthProdiver session={pageProps.session}>
    <Header/>
    <Component {...pageProps} />
   </NextAuthProdiver>
  ) 
}

export default MyApp
