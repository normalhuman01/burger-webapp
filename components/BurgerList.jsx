import styles from "../styles/BurgerList.module.css";
import BurgerCard from "./BurgerCard";

const BurgerList = ({ BurgerList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST Burger IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        {BurgerList.map((Burger) => (
          <BurgerCard key={Burger._id} Burger={Burger} />
        ))}
      </div>
    </div>
  );
};

export default BurgerList;
