import styles from "../styles/departments.module.css"
import Card from "./Card"

const Departments = ({departmentsRef}) => {
    return (
        <>
        <section className={styles.container} ref={departmentsRef}>
            <Card dept="Human Resource"/>
            <Card dept="Research And Development"/>
            <Card dept="Gaming and Technology"/>
            <Card dept="Design and Technology"/>
            <Card dept="Marketing" />
            <Card dept="Social Media" />
            <div></div>
            <Card dept="Content" />
        </section>
        </>
    )
}

export default Departments
