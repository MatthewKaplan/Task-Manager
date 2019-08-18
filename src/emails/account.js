const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'kaplan.matthew.p@gmail.com',
    subject: 'Welcome to the task manager app!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'kaplan.matthew.p@gmail.com',
    subject: 'Were sorry to see you go!',
    text: `Dear, ${name}. We're sorry to see you go, hope you decide to come back soon.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}
