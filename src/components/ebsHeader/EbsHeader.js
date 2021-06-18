import { NavLink } from "react-router-dom";
import styles from "./style.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
export default function EbsHeader() {
  const [search, setSearch] = useState();
  const handleChange = (e) => setSearch(e.target.value);
  const searchClick = () => search && alert(search);
  const logIn = () => alert("нэвтэрлээ");
  const leftHeader = (
    <div className={styles.left}>
      <div className={styles.logo}>
        <span>E-content</span>
      </div>
      <div className={styles.subMenu}>
        <NavLink to={"/ebs/classes"} activeClassName={styles.activeClass}>
          Анги
        </NavLink>
        <NavLink activeClassName={styles.activeClass} to={"/ebs/curses"}>
          Хичээл
        </NavLink>
        <NavLink activeClassName={styles.activeClass} to={"/ebs/textbook"}>
          Сурах бичиг
        </NavLink>
      </div>
    </div>
  );

  const rightHeader = (
    <div className={styles.right}>
      <div className={styles.searchDiv}>
        <input
          type="text"
          placeholder="Хайлт хийх утгаа оруулна уу..."
          onChange={(e) => handleChange(e)}
        />
        <AiOutlineSearch className={styles.icon} onClick={searchClick} />
      </div>
      <div className={styles.buttonDiv}>
        <button className={styles.button} onClick={logIn}>
          <span>Нэвтрэх</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      {leftHeader}
      {rightHeader}
    </div>
  );
}
