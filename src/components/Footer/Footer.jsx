import { Link } from "react-router-dom";
import styles from './Footer.module.css'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const socialMedia = [
  { icon: <FaFacebook />, url: "https://facebook.com/yourpage", color: "text-blue-600" },
  { icon: <FaTwitter />, url: "https://twitter.com/yourpage", color: "text-sky-500" },
  { icon: <FaInstagram />, url: "https://instagram.com/yourpage", color: "text-pink-500" },
];

function Footer() {
  return (
    <div className={styles.FooterSection} id="footer">
      <div className={styles.FooterContent}>
        <p>
        © 2025 <span style={{color:'orange'}}>Filmon Kahsay</span>. All rights reserved.
      </p>
     
       <div className={styles.socialmediaLinks}>
      {socialMedia.map((item, index) => (
        <Link
          key={index}
          to={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.linkItem} hover:opacity-80`}
        >
          {item.icon}
        </Link>
      ))}
    </div>
      </div>
    </div>
  );
}

export default Footer;
