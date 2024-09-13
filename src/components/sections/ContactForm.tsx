import styles from './ContactForm.module.css';
import { useState, useRef } from 'react';
import TextField from '../input/TextField';
import Button from '../buttons/Button';
import { Icon, IconType } from '../icons/Icon';
import TextArea from '../input/TextArea';
import { joinClassNames } from '../../utils';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import useWindowSize from '../../hooks/useWindowSize';

const COMPACT_CAPTCHA_WINDOW_WIDTH = 400;
const HCAPTCHA_SITE_KEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
const WEB3_FORMS_ACCESS_KEY = "7dbbe70d-2eef-4510-9f7a-e769758a79ae";

interface FormResultMessage {
  message: string;
  isError: boolean;
}

interface Props {
  className?: string;
}

const ContactSection = ({ className }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const captchaRef = useRef<HCaptcha>(null);
  const [token, setToken] = useState<string | null>(null);
  const [result, setResult] = useState<FormResultMessage | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [windowWidth] = useWindowSize();

  const setResultMessage = (message: string, isError: boolean) => setResult({ message, isError });

  const resetForm = () => {
    setToken(null);
    formRef.current?.reset();
    captchaRef.current?.resetCaptcha();
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLoading || !captchaRef.current?.isReady()) {
      return;
    }
    if (!token) {
      setResultMessage("Please complete the captcha before sending a message", true);
      return;
    }

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3_FORMS_ACCESS_KEY);
    setIsLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setResultMessage("Message sent successfully!", false);
        resetForm();
      } else {
        setResultMessage("Failed to send message: " + data.message, true);
      }
    } catch (error) {
      setResultMessage("Failed to send message: " + error, true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={joinClassNames(styles.contact, className)} id="contact">
      <h2 className={styles.title}>Get in Touch</h2>
      <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
        <TextField type="text" id="name" placeholder="name" isRequired />
        <TextField type="email" id="email" placeholder="email" isRequired />
        <TextField type="text" id="subject" placeholder="subject" isRequired />
        <TextArea className={styles.message} id="message" placeholder="message" isRequired />
        <div className={windowWidth > COMPACT_CAPTCHA_WINDOW_WIDTH ? styles.captchaNormal : styles.captchaCompact}>
          <HCaptcha
            sitekey={HCAPTCHA_SITE_KEY}
            reCaptchaCompat={false}
            onVerify={setToken}
            size={windowWidth > COMPACT_CAPTCHA_WINDOW_WIDTH ? "normal" : "compact"}
            theme="dark"
            ref={captchaRef}
          />
        </div>
        <Button
          className={joinClassNames(
            styles.sendButton,
            !isLoading ? styles.sendButtonPadding : ''
          )}
          type="submit"
          text="Send"
          isLoading={isLoading}
        >
          <Icon className={styles.icon} type={IconType.SEND} />
        </Button>
      </form>
      {result && (
        <span className={`${styles.result} ${result.isError ? styles.resultError : styles.resultSuccess}`}>
          {result.message}
        </span>
      )}
    </div>
  );
}

export default ContactSection;