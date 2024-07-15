import React, { useEffect, useState } from "react";
import styles from "./FlowerAnimation.module.css";

const FlowerAnimation: React.FC = () => {
  const [flowers, setFlowers] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const newFlowers = new Array(10).fill(0).map((_, i) => (
      <div
        key={i}
        className={styles.flower}
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
        }}
      >
        <div className={styles.petal} />
        <div className={styles.petal} />
        <div className={styles.petal} />
        <div className={styles.petal} />
        <div className={styles.center} />
      </div>
    ));
    setFlowers(newFlowers);
  }, []);

  return <div className={styles.flowerContainer}>{flowers}</div>;
};

export default FlowerAnimation;
