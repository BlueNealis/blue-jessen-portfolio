import styles from './TechnologyBox.module.css'
interface technologyProps {
name: string,
experience: Array<{tag: string, desc: string}>, 
icon: string,
}

const TechnologyBox = ({name, experience, icon}: technologyProps) => {
    return(
        <div className={styles.technologyBox}>
            <div className={styles.technologyHeader}> 
                <img src={icon} alt={name}/>
                <h3>
                    {name}
                </h3>
            </div>
            { experience.map((item) => {
                return(
                        <a key={item.tag} href={`#${item.tag}`}>{item.desc}</a>
                    )
                }
            )
        }
        </div>
    )
}

export default TechnologyBox;