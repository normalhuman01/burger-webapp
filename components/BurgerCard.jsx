import Image from "next/image";
import styles from "../styles/BurgerCard.module.css";
import Link from "next/link";

const BurgerCard = ({ burger }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${Burger._id}`} passHref>
        <Image src={Burger.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{Burger.title}</h1>
      <span className={styles.price}>${Burger.prices[0]}</span>
      <p className={styles.desc}>{Burger.desc}</p>
    </div>
  );
};

export default BurgerCard;
