import styles from "../styles/departments.module.css";
import Card from "./Card";

const Departments = ({ departmentsRef }) => {
  return (
    <>
      <section className={styles.container} ref={departmentsRef}>
        <p className={styles.department_heading}>DEPARTMENTS</p>
        <div className={styles.departments_cards}>
          <Card content="Human Resource" />
          <Card content="Research And Development" />
          <Card content="Gaming and Technology" />
          <Card content="Design and Technology" />
          <Card content="Marketing" />
          <Card content="Social Media" />
          <Card content="Content" />
        </div>

        <div className={styles.departments}>
          <p>Human Resource</p>
          <p>Research and Development</p>
          <p>Gaming and Technology</p>
          <p>Design and Technology</p>
          <p>Marketing</p>
          <p>Social Media</p>
          <p>Content</p>
        </div>
      </section>
    </>
  );
};

export default Departments;
