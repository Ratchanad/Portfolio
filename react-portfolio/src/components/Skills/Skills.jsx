import React from 'react'
import styles from './Skills.module.css'
import { DiJava ,DiReact ,DiDocker } from "react-icons/di"

function Skills() {
  return (
    <div className={styles.skills_con}>
      <h3 className={styles.skills_title}>My Skill Set</h3>
      <ul className={styles.skills_list}>
        <li><DiJava/></li>
        <li><DiReact/></li>
        <li><DiDocker/></li>
      </ul>
    </div>
  )
}

export default Skills
