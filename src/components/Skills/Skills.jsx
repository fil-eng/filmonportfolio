import { skils } from "../../data";
import styles from './Skills.module.css'
function Skills() {
  // console.log(skils);
  return (
    <div className={styles.Skills}>
      <h1>My Skills</h1>
      {skils && (
        <div className={styles.stacks}>
          {skils.map((sta,i) => (
            <li key={i} className={styles.stackItem}>{sta}</li>
          ))}
        </div>
      )}
    </div>
  );
}

export default Skills;
