import { useState } from "react";
import styles from "./style.module.scss";
const data = require("../../localData/profileMenu.json");

export default function ProfileMenu(props) {
  const [clickIdx, setClickIdx] = useState(0);
  const handleChange = (idx) => {
    props.handleSelectIdx(idx);
    setClickIdx(idx);
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftMenu}>
        {data.map((el, idx) => (
          <div
            key={idx}
            className={clickIdx === idx ? styles.activeLink : styles.navLink}
            onClick={() => handleChange(idx)}
          >
            {el.name}
          </div>
        ))}
      </div>
      <div className={styles.rightMenu}>
        <div
          className={clickIdx === 4 ? styles.activeLink : styles.navLink}
          onClick={() => handleChange(4)}
        >
          Хадгалсан хичээл
        </div>
        <div
          className={clickIdx === 5 ? styles.activeLink : styles.navLink}
          onClick={() => handleChange(5)}
        >
          Таалагдсан хичээл
        </div>
      </div>
    </div>
  );
}
