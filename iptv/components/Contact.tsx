import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  // const { darkMode } = theme.state;
  const form = useRef<any>();
  const [values, setValues] = useState({
    email: '',
    message: '',
    name: '',
  });

  const handleInputChange = (e: any) => {
    console.log(e.target);
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // const [done, setDone] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();
    console.log(process.env.EMAILJS_SERVICE_ID);
    // console.log(Object.values(values));
    // Validation
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ''
    );

    // console.log(hasEmptyFields);

    if (hasEmptyFields) {
      toast.error('Please fill in all fields');
      // toast('🦄 Wow so easy!');
    }

    !hasEmptyFields &&
      emailjs
        .sendForm(
          process.env.EMAILJS_SERVICE_ID!,
          process.env.EMAILJS_TEMPLATE_ID!,
          form.current!,
          process.env.EMAILJS_USER_ID!
        )
        .then(
          (result) => {
            console.log(result.text);
            // setDone(true);
            toast.success('Thanks for Contacting me');

            // form.reset();
            setValues({ name: '', email: '', message: '' });
          },
          (error) => {
            toast.error(error.text);
          }
        );
  };

  return (
    <section
      className="contact wrapper"
      id="contact"
    >
      <div className="contact-form">
        <ToastContainer />
        {/* left side copy and paste from work section */}
        <div className="w-left">
          <div className="awesome">
            {/* darkMode */}
            <h1 className="contact--title">Get in Touch</h1>
            {/* <span>Contact me</span> */}
            <p className="contact--text">
              I’m currently looking for a new opportunity, Although, my inbox is
              always open. Whether you have a question or just want to say hi,
              I’ll try my best to get back to you!
            </p>
          </div>
        </div>
        {/* right side form */}
        <div className="c-right">
          <form
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="name"
              className="user"
              placeholder="Name"
              value={values.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              className="user"
              placeholder="Email"
              value={values.email}
              onChange={handleInputChange}
            />
            <textarea
              name="message"
              className="user"
              placeholder="Message"
              value={values.message}
              onChange={handleInputChange}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
