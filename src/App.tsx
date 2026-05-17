import './App.css'
import technologies from './data/technologies';
import TechnologyBox from './components/TechnologyBox';
import NavBar from './components/NavBar/NavBar';
function App() {

  return (
  <>
        <div className="intro-section">
            <div className="name-container">
                <img src="/" width="130px" alt="Circle placeholder"/>
                <h1>Hello I'm, Blue Jessen A Full Stack Developer</h1>
            </div>
        </div>
        <div className="info-section" id="about">
            <h2 className="section-header">About Me</h2>
            <p className="margin-bottom-3">I’m a <b>developer</b>, <b>illustrator</b> who has lived all around the United States
                I’ve been programming since 2021 and working professionally since 2023.</p>
                <div className="image-row">
                    <img src="/" alt="robot"/>
                    <p>In the beginning of 2021 I tried coding at the request of my brother-in-law. He told me
                        about Stanford courses that he took that were free online.  I started my course ordering
                        a little cartoon robot around a room in order to understand how a computer 
                        processes instructions.</p>
                </div>
                <div className="image-row">
                    <img src="/" alt="robot"/>
                    <p>Since then I’ve studied recursion, conquering hanoi, 
                        worked through a 7 month bootcamp defeating javascript sphynx’s, 
                        and successfully worked on four projects at my current company 
                        Booz Allen Hamilton where I currently wrestle with vanilla javascript, React, and Vue.</p>
                </div>
                <p>I love breathing life into web designs, and love to problem-solve my way around coding languages.</p>
            <a className="back-to-top-anchor" href="#top">Back To Top</a>
        </div>
        <div className="info-section" id="technologies">
            <h2 className="section-header">Technologies</h2>
            <div className="technologies-container" id="technologies-container">
               { technologies.map((technology) => {
                    return (
                        <TechnologyBox 
                            key={technology.name}
                            name={technology.name} 
                            icon={technology.icon} 
                            experience={technology.experience} 
                            />
                    )
                })}
            </div>
            </div>
            <a className="back-to-top-anchor" href="#top">Back To Top</a>
          <div className="info-section" id="experience">
            <h2 className="section-header">Experience</h2>
            <div>
                <h3>Software Developer</h3>
                <p>Booz Allen Hamilton</p>
                <div>
                    <h4>Marketing Portal Frontend Lead</h4>
                    <p>As the Frontend Lead I leveraged a small teams skills, and the existing 
                        material in the repository to stand up a marketing site, while also 
                        contributing to the interative gui, and backend of client spending 
                        insight dashboard.</p>
                    <ul>
                        <li>Create stylistically, and functionally flexible components to be used across site, keeping the scalablity in mind.</li>
                        <li>Lead efforts to collect marketing information across team of 25 people for 30 products/technology pages.</li>
                        <li></li>
                        <li>accomplishment</li>
                    </ul>
                </div>
                <div>
                    <h4>GSA Cloud Communications</h4>
                    <p>As the only developer on my small team, I worked to bring modern coding practices to a more simple codebase. I communicate
                        with clients to keep modernization efforts up-to-date, and regularly prune the sites content.  With a smal team I have to wear
                        many hats and often find myself a pseudo-scrummaster, and main point-of-contact for the website. 
                    </p>
                    <ul>
                        <li>accomplishment</li>
                        <li>accomplishment</li>
                        <li>accomplishment</li>
                        <li>accomplishment</li>
                    </ul>
                </div>
            </div>
            <a className="back-to-top-anchor" href="#top">Back To Top</a>
        </div>
        <div className="info-section" id="education">
            <h2 className="section-header">Education</h2>
            <div>
                <h3>Bachelor of the Arts</h3>
                <p>Art Technique and Education</p>
                <p>University of Massachusetts Amherst</p>
                <p>2018</p>
                <p>Description about my education there.</p>
            </div>
            <div>
                <h3>Certificate of Frontend Development</h3>
                <p>Turing School of Software Design</p>
                <p>2022</p>
                <p>Description about my education there.</p>
            </div>
            <a className="back-to-top-anchor" href="#top">Back To Top</a>
        </div>
    </>
    )
}

export default App;
