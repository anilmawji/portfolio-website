import styles from './Contact.module.css';
import TextField from '../input/TextField';
import CustomButton from '../buttons/CustomButton';
import SvgSend from '../../components/icons/SvgSend';
import TextArea from '../../components/input/TextArea';

const ContactSection = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.title}>
        Get in Touch
      </div>
      <form className={styles.form}>
        <TextField text="name" id="name" onChange={() => {}} />
        <TextField text="email" id="email" onChange={() => {}} />
        <TextField text="subject" id="subject" onChange={() => {}} />
        <TextArea className={styles.message} id="message" placeholder="Message" />
      </form>
      <CustomButton className={styles.send} text={"Send"} onClick={() => {}}>
        <SvgSend className={styles.send_icon} />
      </CustomButton>
    </section>
  );
}

export default ContactSection;