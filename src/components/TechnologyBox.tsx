interface technologyProps {
name: string,
experience: Array<string>, 
icon: string,
}

const TechnologyBox = ({name, experience, icon}: technologyProps) => {
    return(
        <div className="technology-box">
            <div className="technology-header"> 
                <img src={icon} alt={name}/>
                <h3>
                    {name}
                </h3>
            </div>
           
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