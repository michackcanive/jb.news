import styles from './styles.module.scss';
interface buttonSubcribe{
    priceId:String
}
export function SubscribeButton({priceId}:buttonSubcribe){
    return(
        <button
        type="button"
        className={styles.subscribeButton}>
            Subscribe now 
        </button>
    )
}