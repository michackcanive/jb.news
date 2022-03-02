import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { useSession, signIn, signOut } from "next-auth/react"

export function SignInButton() {
    const { data: session } = useSession()
    return session ? (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => signOut()}
        >
            <FaGithub color='#04d361' />

            <span >{session.user.name}</span>

            <FiX color='#737380' className={styles.iconClose} />
        </button>
    ) : (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => signIn('github')}
        >
            <FaGithub color='#eba417' />

            <span >Sign In whith Github</span>
            
        </button>
    )
}