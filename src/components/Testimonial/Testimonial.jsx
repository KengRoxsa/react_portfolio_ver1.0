import React from 'react'
import styles from "./Testimonial.module.css"

function Testimonial() {
  return (
    <div>
        <div className={styles.testi_con}>
            <h3 className={styles.testi_title}>Testimonails</h3>
            <div className={styles.testi_list}>
                <div className={styles.testi_items}>
                    <p>
                    เมนูที่มีให้เลือกหลากหลาย, ไม่ว่าจะเป็นกาแฟดั่งใจ, ชาหรือเครื่องดื่มแอลกอฮอล์, ทำให้เรามีโอกาสลองชิมสิ่งใหม่ๆ. ที่นี่ยังมีขนมหลากหลายให้เลือกทาน, ที่ทำมาจากวัตถุดิบคุณภาพสูง, ทำให้ทุกคู่ควรลอง.
                    </p>
                    <img src="https://plus.unsplash.com/premium_photo-1687187499277-e1c59bd3032f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww" alt="" />
                    <h4>John Doe</h4>
                    <p className={styles.bio}>Web Dev</p>
                </div>
                <div className={styles.testi_items}>
                    <p>
                    เมนูที่มีให้เลือกหลากหลาย, ไม่ว่าจะเป็นกาแฟดั่งใจ, ชาหรือเครื่องดื่มแอลกอฮอล์, ทำให้เรามีโอกาสลองชิมสิ่งใหม่ๆ. ที่นี่ยังมีขนมหลากหลายให้เลือกทาน, ที่ทำมาจากวัตถุดิบคุณภาพสูง, ทำให้ทุกคู่ควรลอง.
                    </p>
                    <img src="src\components\Testimonial\juri.png" alt="" />
                    <h4>Jane Doe</h4>
                    <p className={styles.bio}>Web Dev</p>
                </div>
                <div className={styles.testi_items}>
                    <p>
                    เมนูที่มีให้เลือกหลากหลาย, ไม่ว่าจะเป็นกาแฟดั่งใจ, ชาหรือเครื่องดื่มแอลกอฮอล์, ทำให้เรามีโอกาสลองชิมสิ่งใหม่ๆ. ที่นี่ยังมีขนมหลากหลายให้เลือกทาน, ที่ทำมาจากวัตถุดิบคุณภาพสูง, ทำให้ทุกคู่ควรลอง.
                    </p>
                    <img src="src\components\Testimonial\Senna.png" alt="" />
                    <h4>Boe Doe</h4>
                    <p className={styles.bio}>Web Dev</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial