// components/PlantComponent.tsx

import React from "react";
import styles from "./Plant.module.css";

const PlantComponent: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.plant}>
        <div className={styles.flower}>
          <div className={styles.head}>
            <div className={styles.face}></div>
          </div>
        </div>
        <div className={styles.leaf__one}></div>
        <div className={styles.leaf__two}></div>
        <div className={styles.leaf__three}></div>
      </div>
      <div className={styles.pot}>
        <div className={styles.top}></div>
      </div>
    </div>
  );
};

export default PlantComponent;
