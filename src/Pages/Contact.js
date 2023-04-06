import React from "react";
import {MdOutlineMail} from 'react-icons/md'
import '../styles/Contact.css'

const Contact = () => {
  return (  
    <section id='contact'>
     
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <a href="mailto:jake.t@usmedicalglove.com">Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}
 
export default Contact;