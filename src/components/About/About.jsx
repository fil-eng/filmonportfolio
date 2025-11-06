import styles from "./About.module.css";
function About() {
  return (
    <div className={styles.aboutSections} id="about">
      <h1> About Me </h1>
      <div className={styles.paragraphs}>
        <p>
          What motivates me most is seeing real people use something I’ve
          created whether it’s a tool that saves time or a design that delights
          the user. I thrive on solving everyday challenges, like automating
          repetitive tasks or improving user experiences, and every new project
          fuels my curiosity to learn more
        </p>
        <p>
          When I build products, I start by listening closely to users’ needs,
          sketching wireframes, and then iterating quickly based on feedback
          collaboration and clear communication are at the heart of my
          process.My goal is to keep pushing boundaries, stay adaptable, and
          help build solutions that make a meaningful impact.
        </p>
      </div>
    </div>
  );
}

export default About;
