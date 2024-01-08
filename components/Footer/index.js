import Link from "next/link"
import styles from './Footer.module.css'

export default function Footer() {
  return(
    <footer className={styles.footer}>
      <p><Link href={'Home'}>Created by Kelly Huang</Link></p>
    </footer>
  )
}