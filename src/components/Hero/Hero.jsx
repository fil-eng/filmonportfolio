import styles from "./Hero.module.css";
function Hero() {
  return (
    <div className={styles.herosection}>
      <div className={`${styles.hero} ${styles.grid}`}></div>
      <div>
        <h1>Fullstack Web Application Developer</h1>
        <p>
          I'm <span style={{color:'orange',fontSize:'1.2em'}}>Filmon Kahsay</span>,I enjoy building websites using React for the front
          end and Node.js for the back end. I'm passionate about solving real
          problems and learning new technologies every day.
        </p>
      </div>
    </div>
  );
}

export default Hero;
