import styles from "./style.module.scss";
import { BiExit } from "react-icons/all";
import ProfileMenu from "../profileMenu/ProfileMenu";
export default function Profile(props) {
  const logOut = () => alert("гарлаа");
  const studentInfo = (
    <div className={styles.info}>
      <div className={styles.avatar}></div>
      <div className={styles.introInfo}>
        <span>Г. Алтанбагана</span>
        <span> Нийслэлийн 33- р бүрэн дунд сургууль 7-р анги "А" бүлэг</span>
      </div>
      <div className={styles.logOutbutton}>
        <div className={styles.button} onClick={logOut}>
          <span>Гарах</span>
          <BiExit className={styles.icon} size={30} />
        </div>
      </div>
    </div>
  );
  return (
    <div className={styles.container}>
      {studentInfo}
      <div className={styles.menu}>
        <ProfileMenu handleSelectIdx={props.handleSelectIdx} />
      </div>
    </div>
  );
}
