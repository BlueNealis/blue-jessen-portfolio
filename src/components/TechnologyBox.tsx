interface technologyProps {
name: string,
experience: Array<string>, 
icon: string,
}

const TechnologyBox = ({name, experience, icon}: technologyProps) => {
    return(
        <div className="technology-box">
            <img src={icon} alt={name}/>
            <h3>
                {name}
            </h3>
            { experience.map(() => {
                return(
                    <div>
                        <a href={`#${experience}`}>{experience}</a>
                    </div>
                    )
                }
            )
        }
        </div>
    )
}

export default TechnologyBox;