import styles from './Contact.module.css';

const ContactSection = () => {
  return (
    <section className={styles.contact} id="contact">
      <h3>Let's Talk</h3>
      <div className={styles.fields}>
        <input className={styles.name} type="text" name="name" value="Full Name">

        </input>
        <input className={styles.email} type="text" name="email" value="Email">
        
        </input>
        <input className={styles.subject} type="text" name="subject" value="Subject">
        
        </input>
        <textarea className={styles.message} name="message" value="Message">
        
        </textarea>
      </div>
    </section>
  );
}

export default ContactSection;