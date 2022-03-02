import Head from 'next/head';
import { GetStaticProps } from 'next';
import { SubscribeButton } from '../Components/SubscribeButton';
import styles from './home.module.scss';
import { stripe } from '../server/stripe';

interface HomeProps {
    product: {
        priceId: String,
        amanut: number
    }

}

export default function Home({ product }: HomeProps) {
 
    return (
        <>
            <Head>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Home | jb.news</title>
            </Head>
            <main className={styles.contentContainer}>
                <section className={styles.hero}>
                    <span>👋Olá, Bem-Vindo</span>
                    <h1>Notícias sobre o <span>React</span> no mundo.</h1>
                    <p>
                        Tenha acesso a todas as publicações <br />
                        <span className={styles.span_preso}>por {product.amanut} mês</span>
                    </p>
                    <SubscribeButton priceId={product.priceId} />
                </section>
                <img src='/images/avatar.png' alt='jb.news' />
            </main>
        </>

    )
}

export const getStaticProps: GetStaticProps = async () => {

    const price = await stripe.prices.retrieve('price_1KVXUzJ8YRWSg66JKX7mvOv2')
   
    const product = {
        priceId: price.id,
        amanut: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price.unit_amount / 100)
    }

    return {
        props: {
            product,
        },
        revalidate:60*60*24// 24h para revalidar a pagina
    }
}
