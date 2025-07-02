import styles from "./Jurney.module.css";
import Title from "./Title";
import technologies from "../data/technologies.js";
import { useState, useEffect } from "react";
import TechList from "./TechList.jsx";
import TechDetails from "./TechDetails.jsx";

function Jurney() {
  const [selectedId, setSelectedId] = useState(technologies[0]?.id);
  const currentItem = technologies.find((item) => item.id === selectedId);

  return (
    <section className={`container ${styles.wrapper}`}>
      <Title>Jurney</Title>
      <div className={styles.tech_container}>
        <TechList
          technologies={technologies}
          onSelect={setSelectedId}
          selectedId={selectedId}
        />
        <TechDetails item={currentItem} />
      </div>
    </section>
  );
}

export default Jurney;
