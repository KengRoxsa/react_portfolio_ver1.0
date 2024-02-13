import React from "react";
import styles from "./Contact.module.css";
import { FaPhone,FaEnvelope, FaPadlet } from "react-icons/fa6";

function Contact() {
  return (
  <div className={styles.contact_wrapper}>
    <div className={styles.contact_con}>
        <div className={styles.contact_info}>
            <h3>Get in touch!</h3>
            <p className={styles.con_desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quis corporis velit dolorum. Provident hic dolore magnam dolorum reprehenderit earum culpa nisi eum tempora mollitia vitae, inventore obcaecati ipsa dolorem?
            </p>
            <p className={styles.con_address}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio <br/>quis corporis velit dolorum. Provident hic dolore magnam dolorum reprehenderit earum culpa nisi eum tempora mollitia vitae, inventore obcaecati ipsa dolorem?
            </p>
            <p><FaPhone/>       (+66) 94 262 3705</p>
            <p><FaEnvelope/>        niti.unyapho@gmail.com</p>

        </div>
        <div className={styles.contact_form}>
            <form>
                <div className={styles.input_group}>
                    <div>
                        <label htmlFor="first name">First Name</label> 
                        <input type="text" placeholder="enter name"></input>

                    </div>
                    <div>
                    <label htmlFor="last name">Last Name</label> 
                    <input type="text" placeholder="enter last name"></input>

                    </div>
                </div>
                <label htmlFor="email address">Email Address</label> 
                <input type="text" placeholder="enter email"></input>
                <label htmlFor="message">Your Message</label> 
                <textarea name="" id="" cols="30" rows="10" placeholder="Typew here"></textarea>
                <button type="submit">Submit</button>

            </form>
        </div>
    </div>

  </div>
  )
}

export default Contact;
