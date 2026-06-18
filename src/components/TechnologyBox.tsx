import styles from './TechnologyBox.module.css'
interface technologyProps {
name: string,
icon: string,
}

const TechnologyBox = ({name, icon}: technologyProps) => {
    return(
        <div className={styles.technologyBox}>
            <div className={styles.technologyHeader}> 
                <h3>
                    {name}
                </h3>
            </div>
        </div>
    )
}

export default TechnologyBox;