import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p classNames={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('','',0.1, 1)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quaerat commodi corporis quod recusandae inventore repellendus sequi, fugiat assumenda soluta deleniti nemo esse ipsa minus labore eos dolorum officiis ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque deserunt magni illo maxime nisi temporibus quaerat adipisci sint debitis. Asperiores similique eum voluptatem expedita sequi temporibus doloremque! Reiciendis, excepturi soluta.

      </motion.p>
    </>
  )
}

export default About
