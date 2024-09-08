import styles from './Contact.module.css';
import { useState } from 'react';
import TextField from '../input/TextField';
import Button from '../buttons/Button';
import Icon, { IconType } from '../icons/Icon';
import TextArea from '../../components/input/TextArea';
import { joinClassNames } from '../../utils';

// Non-sensitive identifiers
const hCaptchaSiteKey = "d574842a-aa1e-4d90-a8b8-c9aeefb6e09c";
const web3FormsAccessKey = "7dbbe70d-2eef-4510-9f7a-e769758a79ae";

interface PropTypes {
  className?: string;
}

const ContactSection = ({ className }: PropTypes) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", web3FormsAccessKey);

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
    <div className={joinClassNames(styles.contact, className)} id="contact">
      <div className={styles.title}>Get in Touch</div>
      <form className={styles.form} onSubmit={onSubmit}>
        <TextField type="text" id="name" placeholder="name" isRequired />
        <TextField type="email" id="email" placeholder="email" isRequired />
        <TextField type="text" id="subject" placeholder="subject" isRequired />
        <TextArea className={styles.message} id="message" placeholder="message" isRequired />
        {/* <div className={styles.captcha}>
          <HCaptcha sitekey={hCaptchaSiteKey} theme="dark" />
        </div> */}
        <Button className={styles.send} type="submit" text="Send">
          <Icon className={styles.icon} type={IconType.SEND} size={24} />
        </Button>
      </form>
      {result && <span className={styles.result}>{result}</span>}
      <div className={styles.border}></div>
    </div>
  );
}

export default ContactSection;