// rfce : สร้างโครง react//

import React, {useState} from "react";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa6";

function Navbar() {

/* 2. ตรงนี้คือสร้างเพิ่มสำหรับทำ responsive website*/ 

const [isToggled,setToggle]=useState(false);

function handleToggle(){
    setToggle(!isToggled)//false +false = true
}


    return (
        <nav>
            {/*<div className="container"> ต้องเปลี่ยนเป็นสำหรับการเขียน module
        เลยเป็น className={style.container}*/}
            <div className={styles.container}>
                <div className={styles.nav_con}>
                    <div className={styles.logo}>
                        <a href="#">JD PORT</a>
                    </div>

                    <ul>
                        <li>
                            <a href="#">Skill</a></li>
                        <li>
                            <a href="#">Portfolio</a></li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        
                    </ul>

                    <div className={styles.button}>
                        <a href="#">Hire Me</a>
                    </div>
                </div>

                {/* คีย์ลัดของ comment คือ CTRL + ? หรือ ฝ */}
                {/* Mobile menu */}
                <FaBars className={styles.bars} onClick={handleToggle} />
                {isToggled ? (
                    <>
                      <ul className={styles.mobile_menu}>
                        <li>
                            <a href="#">Skill</a></li>
                        <li>
                            <a href="#">Portfolio</a></li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        
                    </ul>  
                    <div className={styles.mobile_button}>
                        <a href="#">Hire Me</a>
                    </div>
                    </>
                ): null
            }
            </div>
        </nav>
    );
}

export default Navbar;
