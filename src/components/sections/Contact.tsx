import styles from './Contact.module.css';
import CustomButton from '../buttons/CustomButton';

const ContactSection = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.title}>
        Get in Touch
      </div>
      <div className={styles.fields}>
        <input className={styles.name} type="text" name="name" value="Full Name" onChange={() => {}}>

        </input>
        <input className={styles.email} type="text" name="email" value="Email" onChange={() => {}}>
        
        </input>
        <input className={styles.subject} type="text" name="subject" value="Subject" onChange={() => {}}>
        
        </input>
        <textarea className={styles.message} name="message" value="Message" onChange={() => {}}>
        
        </textarea>
      </div>
      <CustomButton className={styles.send} text={"Send"} onClick={() => {}}/>
    </section>
  );
}

export default ContactSection;