import styles from "./Testmonial.module.css";
import tade from "../../assets/tade.jpg";
import hague from "../../assets/hague.jpg";

export const testmonials = [
  {
    img: tade,
    name: "Tade",
    testmonial:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ipsum veniam earum? Beatae fugiat odit nulla tempora corrupti adipisci at reprehenderit ratione. Veniam, dolorem labore. Obcaecati ex inventore iusto vero!",
  },
  {
    img: hague,
    name: "Hague",
    testmonial:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ipsum veniam earum? Beatae fugiat odit nulla tempora corrupti adipisci at reprehenderit ratione. Veniam, dolorem labore. Obcaecati ex inventore iusto vero!",
  },
  {
    img: tade,
    name: "Tade",
    testmonial:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ipsum veniam earum? Beatae fugiat odit nulla tempora corrupti adipisci at reprehenderit ratione. Veniam, dolorem labore. Obcaecati ex inventore iusto vero!",
  }
];
function Testmonial() {
  return (
    <div className={styles.testmonialwrapper}>
      <h1>Testmonials</h1>
      <div className={styles.Testmonials}>
        {testmonials &&
          testmonials?.map((testmonial, i) => {
            return (
              <div key={i} className={styles.Testmonial}>
                <img src={testmonial.img} alt="testmonial image" />
                <h3>{testmonial.name}</h3>
                <p>{testmonial.testmonial}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Testmonial;
