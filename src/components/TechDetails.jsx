import styles from "./TechDetails.module.css";

function TechDetails({ item }) {
  if (!item) return;
  return (
    <div className={styles.tech_details}>
      <h3 className={styles.heading}>{item.course}</h3>
      <p>
        <strong> {item.from}</strong> - <strong> {item.to}</strong>
      </p>
      <p className={styles.went}>What I went through during the course:</p>
      <em className={styles.skill_items}>
        {item.skills.map((skill, index) => (
          <li key={index} className={styles.list_item}>
            {skill}
          </li>
        ))}
      </em>
    </div>
  );
}

export default TechDetails;
