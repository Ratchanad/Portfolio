import React from 'react'
import styles from './Hero.module.css'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container} >
        <div className={styles.hero_con}>
            <div className={styles.hero_info}>
                <p className={styles.text_1}>Hi, it's me</p>
                <h3 className={styles.text_2}>Ratchanad Malakul</h3>
                <p className={styles.text_3}>
                    I'm a Software Engineer
                </p>
                <p className={styles.text_4}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga fugiat commodi quas cupiditate minus dolore nulla eos accusantium labore explicabo.
                </p>
                <ul className={styles.hero_social}>
                    <li><a href="#"><FaGithub /></a></li>
                    <li><a href="#"><FaLinkedin /></a></li>
                    <li><a href="#"><FaInstagram /></a></li>
                </ul>
            </div>
            <div>
                <div className={styles.hero_img}></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
