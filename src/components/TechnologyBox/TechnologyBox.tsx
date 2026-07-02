import styles from './TechnologyBox.module.css'

interface ExperienceItem {
    tag: string;
    desc: string;
}

interface TechnologyProps {
    name: string;
    icon: string;
    isActive: boolean;
    onClick: () => void;
    experience: ExperienceItem[];
}
// Next thing to do is adjust the logic so that the other pills go under the active pill and not just adjust around it
// then fill out data for each box
const TechnologyBox = ({ name, icon, isActive, onClick, experience }: TechnologyProps) => {
    return(
        <div 
            className={`${styles.technologyBox} ${isActive ? styles.active : ''}`}
            onClick={onClick}
        >
            <h3>
                {name}
            </h3>
            <div className={`${styles.technologyDetails} ${isActive ? styles.active : styles.inactive}`}>
                {experience.map((exp) => (
                    <div key={exp.tag} className={styles.experienceTag}>
                        <span className={styles.tag}>{exp.tag}</span>
                        <p>{exp.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TechnologyBox;