import styles from './NavBar.module.css'
import { useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenuVisbility = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div>
            <button className={`${styles.burger} ${styles.toggle_btn}`} >
                <img src='src/assets/burger.svg' height='25' width='25' />
                Menu
            </button>
            <ul className={`nav ${styles.nav_container}`} id="top" >
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li> 
                <li><a href="#technologies">Technologies</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#education">Resume</a></li>
            </ul>
        </div>
    )
}

export default NavBar;