import {} from 'react'
import styles from '../css/Footer.module.css'
import {FaFacebook} from 'react-icons/fa6'
import {FaInstagram} from 'react-icons/fa6'
import {FaLinkedin} from 'react-icons/fa6'

function Footer() {


  return (
    <footer className={styles.footer}>
      <div>
      <p><FaFacebook className={styles.rede} />
        <FaInstagram className={styles.rede} />
       <FaLinkedin className={styles.rede} /></p> 
       <h1 className={styles.titFooter}>@2023</h1>
      </div>
    </footer>
  )
}

export default Footer
