import React from 'react'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav>
        <div className={styles.container}>
            <div className={styles.nav_con}>
                <div className={styles.logo}>
                        <a href="#"> PORTFOLIO</a>
                </div>

                <ul>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Skills</a></li>
                </ul>

                <div className={styles.button} >
                    <a href="#">Hire Me</a>
                </div>
                
            </div>

        </div>
    </nav>
  )
}

export default Navbar
