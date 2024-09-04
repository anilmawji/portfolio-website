import styles from './Contact.module.css';
import { useState } from 'react';
import TextField from '../input/TextField';
import CustomButton from '../buttons/CustomButton';
import Icon, { IconType } from '../icons/Icon';
import TextArea from '../../components/input/TextArea';
import { joinClassNames } from '../../utils';

const ContactSection = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "7dbbe70d-2eef-4510-9f7a-e769758a79ae");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      console.log("Failed to submit form:", data);
      setResult(data.message);
    }
  }

  return (
    <>
      <div className={joinClassNames(styles.contact, "shadow")} id="contact">
        <div className={styles.title}>Get in Touch</div>
        <form className={styles.form} onSubmit={onSubmit}>
          <TextField type="text" id="name" text="name" isRequired onChange={() => {}} />
          <TextField type="email" id="email" text="email" isRequired onChange={() => {}} />
          <TextField type="text" id="subject" text="subject" isRequired onChange={() => {}} />
          <TextArea className={styles.message} id="message" placeholder="Message" isRequired />
          <CustomButton className={styles.send} type="submit" text={"Send"} onClick={() => {}}>
            <Icon className={styles.icon} type={IconType.SEND} size={24} />
          </CustomButton>
        </form>
        <span>{result}</span>
        <div className={styles.border}></div>
      </div>
    </>
  );
}

export default ContactSection;