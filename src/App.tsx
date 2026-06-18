import './App.css'
import technologies from './data/technologies';
import TechnologyBox from './components/TechnologyBox';
import NavBar from './components/NavBar/NavBar';
function App() {

  return (
  <>
        <NavBar/>
        <div className="intro-section">
            <div className="name-container">
                <img src="/assets/blue_portrait.png" width="130px" alt="Circle placeholder"/>
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
                    <h4>GSA Marketing Portal Frontend Lead</h4>
                    <p>Architected and built a government portal application using Next.js, React, TypeScript, and USWDS components. Led a small team by conducting code reviews and integrating frontend contributions from two developers, ensuring quality and consistency across the codebase. Partnered directly with clients to refine functionality and design direction while delivering MVP within tight deadlines.</p>
                    <ul>
                        <li>Built responsive admin dashboard with sortable tables, pagination, and real-time search functionality for user and tenant management</li>
                        <li>Created reusable form components with dynamic field generation, validation, and multi-select/dropdown support</li>
                        <li>Optimized component state using React hooks to reduce re-renders and improve application performance</li>
                        <li>Troubleshot and optimized API performance using Postman and CloudWatch Lambda logs, deploying fixes through CI/CD GitHub Actions</li>
                        <li>Integrated AWS Lambda backend services with Amazon Cognito authentication and DynamoDB for data persistence</li>
                    </ul>
                </div>
                <div>
                    <h4>GSA Cloud Communications Developer</h4>
                    <p>As the sole developer on a small team, I modernized the codebase by implementing current best practices while maintaining project continuity. Collaborated directly with clients and leadership to prioritize modernization efforts, ensuring alignment with business objectives. Participated in all Agile ceremonies and served as a key point-of-contact for technical decisions and site governance.
                    </p>
                    <ul>
                        <li>Led comprehensive accessibility audit and remediation effort, correcting defects to achieve 508 compliance across the site for a cohesive user experience</li>
                        <li>Architected and executed migration from Google Auth to Amazon Cognito User Pools, improving security posture and enabling enterprise SSO capabilities</li>
                        <li>Established quality assurance processes including link checking and page content auditing to increase site reliability for leadership and users</li>
                        <li>Collaborated with designers to build modern website components with improved filtering and search functionality within a limited technology stack</li>
                    </ul>
                </div>
                 <div>
                    <h4>DOT Software Engineer</h4>
                    <p>Built and maintained a dynamic web application using Vue and Astro.js while mentoring a self-taught developer. Provided comprehensive technical guidance on modern development practices including accessibility standards, semantic HTML, proper link usage, and collaborative git workflows. Reviewed code contributions and introduced PR-based development processes to improve code quality and team collaboration.</p>
                    <ul>
                        <li>Architected responsive Vue components with Astro.js, enabling flexible design implementation and improved developer experience</li>
                        <li>Mentored junior developer on accessibility best practices using semantic HTML and proper link implementation to ensure WCAG compliance</li>
                        <li>Established and enforced PR-based git workflow, replacing direct pushes to improve code review practices and reduce integration issues</li>
                        <li>Conducted code reviews on JavaScript contributions, ensuring consistency with project standards and best practices</li>
                        <li>Supported designer-driven development by building components that allowed seamless integration of design iterations</li>
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
