import React from 'react'
import styles from './Service.module.css'
import { FaCode, FaPaintBrush, FaDesktop} from "react-icons/fa";


function Service() {
  return (
    <div className={styles.service_con}>
        <h3 className={styles.service_title}>My Service</h3>
        <div className={styles.service_list}>
            <div className={styles.service_item}>
                <FaCode/>
                <h4>Web Devolopment</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Tenetur eveniet reprehenderit, ea maior
                    es aperiam nam minus nihil mollitia accusamus ali
                    quid odit provident necessitatibus beatae. Distinc
                    tio aperiam id saepe praesentium laborum.
                </p>
            </div>
            <div className={styles.service_item}>
                <FaPaintBrush/>
                <h4>Web Design</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Tenetur eveniet reprehenderit, ea maior
                    es aperiam nam minus nihil mollitia accusamus ali
                    quid odit provident necessitatibus beatae. Distinc
                    tio aperiam id saepe praesentium laborum.
                </p>
            </div>
            <div className={styles.service_item}>
                <FaDesktop/>
                <h4>Front-end  Consulting</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Tenetur eveniet reprehenderit, ea maior
                    es aperiam nam minus nihil mollitia accusamus ali
                    quid odit provident necessitatibus beatae. Distinc
                    tio aperiam id saepe praesentium laborum.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Service