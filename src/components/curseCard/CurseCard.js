import styles from "./style.module.scss";
import { BiBookAlt, FiBookmark, BsArrowRight } from "react-icons/all";
export default function CurseCard(props) {
  const continueHandler = () => alert("Үргэлжлүүлэх");

  const buttons = (
    <div className={styles.buttons}>
      <div className={styles.buttonItem}>
        <BiBookAlt />
        <span>{props.data.section}</span>
      </div>
      <div className={styles.buttonItem}>
        <FiBookmark />
        <span>{props.data.curse}-н хичээл</span>
      </div>
      <div className={styles.buttonItem} onClick={continueHandler}>
        <span>Үргэлжлүүлэх</span>
        <BsArrowRight />
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.avatarContainer}>
        <div className={styles.avatar}></div>
      </div>
      <div className={styles.info}>
        <span className={styles.curseName}>{props.data.name}</span>
        <span className={styles.curseDesc}>{props.data.desc}</span>
        {buttons}
      </div>
    </div>
  );
}
