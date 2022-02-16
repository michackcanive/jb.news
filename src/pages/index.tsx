import Head from 'next/head';
import { SubscribeButton } from '../Components/SubscribeButton';
import styles from './home.module.scss';
export default function Home() {
    return (
        <>
            <Head>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Home | jb.news</title>
            </Head>
           <main className={styles.contentContainer }>
               <section className={styles.hero}>
                <span>👋Olá, Bem-Vindo</span>
                <h1>Notícias sobre o <span>React</span>no mundo.</h1>
                <p>
                Tenha acesso a todas as publicações <br/>
                    <span className={styles.span_preso}>for $2.30 month</span>
                </p>
                <SubscribeButton/>
               </section>
               <img src='/images/avatar.png' alt='jb.news'/>
           </main>
        </>

    )
}
