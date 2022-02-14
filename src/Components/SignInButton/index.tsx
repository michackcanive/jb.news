import styles from './styles.module.scss'
import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
export function SignInButton() {
    const isUserLoggeIn = false;
    return isUserLoggeIn ? (
        <button
            type="button"
            className={styles.signInButton}>
                <FaGithub color='#04d361'/>
            <span >Michak Antonio</span>
            <FiX color='#737380' className={styles.iconClose}/>
        </button>
    ) : (
        <button
            type="button"
            className={styles.signInButton} >
           <FaGithub color='#eba417'/>
            <span  >Sign In whith Github</span>
        </button>
    )
}