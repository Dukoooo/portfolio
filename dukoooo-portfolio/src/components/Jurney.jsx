import styles from "./Jurney.module.css";
import Title from "./Title";
import technologies from "../data/technologies.js";
import { useState, useEffect } from "react";
import TechList from "./TechList.jsx";
import TechListSmall from "./TechListSmall.jsx";
import TechDetails from "./TechDetails.jsx";

function Jurney() {
  const [selectedId, setSelectedId] = useState(technologies[0]?.id);
  const currentItem = technologies.find((item) => item.id === selectedId);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 666);
  const currentIndex = technologies.findIndex((item) => item.id === selectedId);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 666);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleNext() {
    setSelectedId(
      currentIndex < technologies.length - 1
        ? technologies[currentIndex + 1].id
        : technologies[0].id
    );
  }

  function handlePrev() {
    setSelectedId(
      currentIndex > 0
        ? technologies[currentIndex - 1].id
        : technologies[technologies.length - 1].id
    );
  }

  return (
    <section className={`container ${styles.wrapper}`} id="jurney">
      <Title>Jurney</Title>
      <div className={styles.tech_container}>
        {isMobile ? (
          <TechListSmall
            technologies={technologies}
            onSelect={setSelectedId}
            selectedId={selectedId}
            currentItem={currentItem}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        ) : (
          <TechList
            technologies={technologies}
            onSelect={setSelectedId}
            selectedId={selectedId}
          />
        )}
        <TechDetails item={currentItem} />
      </div>
    </section>
  );
}

export default Jurney;
