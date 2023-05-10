import emailjs from '@emailjs/browser';

type EmailParams = {
  name: string;
  email: string;
  message: string;
};

const sendEmail = async ({ name, email, message }: EmailParams) => {
  const templateParams = {
    from_name: name,
    from_email: email,
    message,
  };

  try {
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      templateParams,
      process.env.EMAILJS_USER_ID!,
    );

    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

export default sendEmail;
