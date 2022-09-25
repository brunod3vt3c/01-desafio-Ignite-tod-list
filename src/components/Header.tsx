import Rocket from '../assets/rocket.svg'
import styles from './Header.module.scss'

export function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <img src={Rocket} alt="" className={styles.img} />
        <strong><p>to</p><p>do</p></strong>
      </div>
      
    </header>
  )
}