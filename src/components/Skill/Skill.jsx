import React from 'react'
import styles from './Skill.module.css'
import { FaLanguage , FaFacebookF, FaLinkedinIn, FaSquare, FaReact, FaSass, FaSquareJs } from 'react-icons/fa6';
import { SiBlender,SiAdobephotoshop,SiMicrosofttranslator   } from "react-icons/si";

function Skil() {
  return (
    <div className={styles.skill_con}>
      <h3 className={styles.skill_title}>My Skills</h3>
      <ul className={styles.skill_list}>
        <li>
          <FaSquareJs/>
        </li>
        <li>
          <FaReact/>
        </li>
        <li>
          <FaSass/>
        </li>
        <li>
          <SiMicrosofttranslator  />
        </li>
        <li>
          <SiBlender />
        </li>
        <li>
          <SiAdobephotoshop  />
        </li>

      </ul>
    </div>
  )
}

export default Skil