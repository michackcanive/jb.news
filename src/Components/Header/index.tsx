import { SignInButton } from "../SignInButton"
import styles from "./styles.module.scss"

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContant}>
                <img src="/images/logo.png" width="80"/>
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Post</a>
                </nav>
                <SignInButton/>
            </div>
        </header>
        
    )
}