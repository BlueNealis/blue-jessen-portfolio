import styles from './TechnologyBox.module.css'
interface technologyProps {
name: string,
icon: string,
}

const TechnologyBox = ({name, icon}: technologyProps) => {
    return(
        <div className={styles.technologyBox}>
                <h3>
                    {name}
                </h3>
                <div className={styles.technologyDetails__inactive}>
                    <p>Details about this technology</p>
                </div>
        </div>
    )
}

export default TechnologyBox;