import React from 'react'
import * as styles from '../styles/footer.module.css'
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'gatsby';

export default function Footer() {
  return (
    <div><section>Footer Example 4</section>
    <footer className={styles.footerDistributed}>
    
          <div className={styles.footerLeft}>
    
            <h3>Company<span>logo</span></h3>
    
            <p className={styles.footerLinks}>
              <a href="#" className={styles.link1}>Homepage</a>
              
              <a href="#">About Us</a>
            
              <a href="#">Contact</a>

            </p>
    
            <p className={styles.footerCompanyName}>Company Name © 2022</p>
          </div>
    
          <div className={styles.footerCenter}>
    
            <div>
              <i><FaMapMarkerAlt style={{verticalAlign:'2', fontSize:'18'}}/></i>
              <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
            </div>
    
            <div>
              <i><FaPhoneAlt style={{verticalAlign:'2', fontSize:'18'}}/></i>
              <p>+1.555.555.5555</p>
            </div>
    
            <div>
              <i><FaEnvelope style={{verticalAlign:'2', fontSize:'18'}}/></i>
              <p><a href="mailto:support@company.com">support@company.com</a></p>
            </div>
    
          </div>
    
          <div className={styles.footerRight}>
    
            <p className={styles.footerCompanyAbout}>
              <span>About the company</span>
              Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
            </p>
    
            <div className={styles.footerIcons}>
    
              <Link to="https://tiktok.com/tasos.katsianos" target="_blank"><FaFacebookF style={{verticalAlign:'-3'}}/></Link>
              <Link to="https://tiktok.com/tasos.katsianos" target="_blank"><FaInstagram style={{verticalAlign:'-3'}}/></Link>
              <Link to="https://tiktok.com/tasos.katsianos" target="_blank"><FaYoutube style={{verticalAlign:'-3'}}/></Link>
              <Link to="https://tiktok.com/tasos.katsianos" target="_blank"><FaTiktok style={{verticalAlign:'-3'}}/></Link>
    
            </div>
    
          </div>
    
        </footer></div>
  )
}
