import styles from './NavBar.module.css'
import { useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenuVisbility = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div className={styles.nav_container}>
            <button className={`${styles.burger} ${styles.toggle_btn}`} >
                <img src='src/assets/burger.svg' height='25' width='25' />
                Menu
            </button>
            <ul className="nav" id="top">
                <button><a href="#about">About</a></button>
                <button><a href="#experience">Experience</a></button> 
                <button><a href="#technologies">Technologies</a></button>
                <button><a href="#education">Education</a></button>
                <button><a href="#education">Resume</a></button>
            </ul>
        </div>
    )
}

export default NavBar;