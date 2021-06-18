import { useState } from "react";
import CurseCard from "../../components/curseCard/CurseCard";
import EbsHeader from "../../components/ebsHeader/EbsHeader";
import Profile from "../../components/profile/Profile";
import styles from "./style.module.scss";
const cursesData = require("../../localData/cursesData.json");
export default function EbsPage() {
  const [selectIdx, setSelectIdx] = useState(0);
  const handleSelectIdx = (idx) => setSelectIdx(idx);
  return (
    <div className={styles.container}>
      <EbsHeader />
      <Profile handleSelectIdx={handleSelectIdx} />
      <div className={styles.curses}>
        {selectIdx !== 0 ? (
          <h1>{selectIdx}</h1>
        ) : (
          cursesData.map((el, idx) => (
            <div className={styles.curse} key={idx}>
              <CurseCard data={el} key={idx} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
