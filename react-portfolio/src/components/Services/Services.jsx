import React from 'react'
import styles from './Services.module.css'
import { FaCode, FaDesktop, FaPaintBrush } from 'react-icons/fa'


function Services() {
  return (
    <div className={styles.services_con}>
      <h3 className={styles.services_title}>My Services</h3>
      <div className={styles.services_list}>
        <div className={styles.services_items}>
            <FaCode/>
            <h4>Web Development</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.</p>
        </div>
        <div className={styles.services_items}>
            <FaPaintBrush/>
            <h4>Backend Development</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.</p>
        </div>
        <div className={styles.services_items}>
            <FaDesktop/>
            <h4>Software Engineer</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Services
