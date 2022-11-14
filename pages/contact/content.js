import styles from '../../styles/Layout.module.css'
import { motion } from 'framer-motion'
// import emailHandler from '../api/email'

async function sendMessage(payload) {
  const body = JSON.stringify(payload);
  const result = await (await fetch('/https://p-deploy.vercel.app/message/send/messageOnly', {
    body,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }))
  return result.json();
}

function handleSubmit() {
  // return sendMessage({
  //   my_email: "kartik.sindura@gmail.com",
  //   user_name: "name",
  //   user_email: "kartik.sindura@gmail.com",
  //   message: "working"
  // })
  alert("hello")
}

export default function Contact() {
  return (
    <motion.div
      target="_blank"
      href='/'
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}>
          <code>
      <div className={styles.content}>
        <h1 className={styles.header}>
            Drop me a message
        </h1>
        <form>
          <div className={styles.formcontainer}>
            <label>Name</label>
            <input className={styles.input} type="text" maxLength={50} placeholder="Name"/>
          </div>
          <div className={styles.formcontainer}>
            <label>Email</label>
            <input className={styles.input} type="text" maxLength={70} placeholder="Email"/>
          </div>
          <div className={styles.formcontainer}>
            <label>Message</label>
            <textarea className={styles.message} type="textarea" placeholder="Type a message" />
          </div>
          <div className={styles.formcontainer}>
            <button className={styles.button} type="submit" onClick={handleSubmit}>Submit</button>
          </div>
        </form>
        <div className={styles.footer}></div>
      </div>
          </code>
    </motion.div>
  )
}
