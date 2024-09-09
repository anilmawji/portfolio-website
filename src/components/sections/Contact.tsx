import styles from './Contact.module.css';
import { useState, useRef } from 'react';
import TextField from '../input/TextField';
import Button from '../buttons/Button';
import Icon, { IconType } from '../icons/Icon';
import TextArea from '../../components/input/TextArea';
import { joinClassNames } from '../../utils';
import HCaptcha from '@hcaptcha/react-hcaptcha';

// Public keys
const hCaptchaSiteKey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
const web3FormsAccessKey = "7dbbe70d-2eef-4510-9f7a-e769758a79ae";

interface PropTypes {
  className?: string;
}

const ContactSection = ({ className }: PropTypes) => {
  const [result, setResult] = useState<string>("");
  const [token, setToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending message...");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", web3FormsAccessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
    } else {
      setResult("Could not send message: " + data.message + ". Try reloading the page.");
    }
  }

  // This reaches out to the hCaptcha JS API and runs the execute function on it.
  // By waiting for onLoad the hCaptcha API will be ready and the hCaptcha client will have been setup.
  // Source: https://github.com/hCaptcha/react-hcaptcha
  const onLoad = () => {
    if (captchaRef.current) {
      captchaRef.current.execute();
    }
  }

  return (
    <div className={joinClassNames(styles.contact, className)} id="contact">
      <div className={styles.title}>Get in Touch</div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField type="text" id="name" placeholder="name" isRequired />
        <TextField type="email" id="email" placeholder="email" isRequired />
        <TextField type="text" id="subject" placeholder="subject" isRequired />
        <TextArea className={styles.message} id="message" placeholder="message" isRequired />
        <div className={styles.captcha}>
          <HCaptcha
            sitekey={hCaptchaSiteKey}
            reCaptchaCompat={false}
            onLoad={onLoad}
            onVerify={setToken}
            ref={captchaRef}
            theme="dark"
          />
        </div>
        <Button className={styles.send} type="submit" text="Send" disabled={!token}>
          <Icon className={styles.icon} type={IconType.SEND} />
        </Button>
      </form>
      {result && <span className={styles.result}>{result}</span>}
      <div className={styles.border}></div>
    </div>
  );
}

export default ContactSection;