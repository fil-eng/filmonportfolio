import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Styles from "./Form.module.css";
const Form = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        setStatus("✅ Message sent successfully!");
        form.current.reset();
        setTimeout(() => {
          setStatus(" ");
        }, 3000);
      },
      (error) => {
        setStatus("❌ Failed to send message. Try again later.");
        // console.error(error);
         setTimeout(() => {
          setStatus(" ");
        }, 3000);
      }
    );
  };

  return (
    <div className={Styles.formWraper} id='contact'>
      <h2 className={Styles.fom}>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>
        {status && <p className={Styles.status}>{status}</p>}
        {/* <p className={Styles.status}>succesfull message</p> */}
        <button type="submit" className="">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
