import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.port_con}>
        <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_item}>
            <img src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29kaW5nfGVufDB8fDB8fHww"></img>
            <p>Project Title</p>
        </div>
        <div className={styles.port_item}>
            <img src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29kaW5nfGVufDB8fDB8fHww"></img>
            <p>Project Title</p>
        </div>
        <div className={styles.port_item}>
            <img src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29kaW5nfGVufDB8fDB8fHww"></img>
            <p>Project Title</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
