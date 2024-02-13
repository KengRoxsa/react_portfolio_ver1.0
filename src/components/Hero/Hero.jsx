import React from 'react'
import styles from './Hero.module.css'
import { FaGithub, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';

//import จากข้างนอก
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt'


function Hero() {
  return (
    <div className={styles.hero_wrapper}>
        <div className={styles.container}>
            <div className={styles.hero_con}>
                <div className={styles.hero_info}>
                    <p className={styles.text_1}>Hi it's Me</p>
                    <h3 className={styles.text_2}>Nithi Anyopho</h3>
                    <p className={styles.text_3}>
                      {/* ตรงนี้คือการเขียน css inline สังเกตว่าเวลาเรียกใช้ function , state มันจะเรียกผ่าน {} จำให้ดี */}
                      <span style={{ marginRight: '10px'}}>I'm </span>
                      <TypeAnimation
                    sequence={[
                      'Front-end Developer',
                      1000,
                      'Web Developer',
                      1000,
                    ]}
                    speed={30}
                    repeat={Infinity}
                  />
                      </p>
                      <p className={styles.text_35}>
                      {/* ตรงนี้คือการเขียน css inline สังเกตว่าเวลาเรียกใช้ function , state มันจะเรียกผ่าน {} จำให้ดี */}
                      
                      <TypeAnimation
                    sequence={[
                      'Junior',
                      500,
                      'Beginer try to learn!!',
                      500,
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />
                      </p>

                    <p className={styles.text_4}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus quo, architecto omnis a modi sunt alias hic?
                    <br/> Quidem cum porro nam nobis explicabo! Iusto esse debitis facilis praesentium quasi?</p>
                    <ul className={styles.hero_social}>
                      <li><a href='#'><FaGithub/></a></li>
                      <li><a href='#'><FaLinkedinIn/></a></li>
                      <li><a href='#'><FaFacebookF/></a></li>
                    </ul>
                </div>
                
                <Tilt scale={1.6} transitionSpeed={600} tiltReverse={false}>
                    <div className={styles.hero_ig}></div>
                </Tilt>
                
            </div>
        </div>
    </div>
  )
}

export default Hero