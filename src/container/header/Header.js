import { NavLink } from "react-router-dom";
import styles from "./style.module.scss";
const linkData = require("../../localData/headerData.json");
export default function Header() {
  return (
    <div className={styles.container}>
      {linkData &&
        linkData.map((el, key) => (
          <NavLink
            key={key}
            to={"/" + el.url}
            activeClassName={styles.activeClass}
          >
            {el.text}
          </NavLink>
        ))}
    </div>
  );
}
