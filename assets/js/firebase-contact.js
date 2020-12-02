var firebaseConfig = {
  apiKey: 'AIzaSyC6qBVaP6KUMR9Up6sZrxr0aMBhrv__0c8',
  authDomain: 'portfolio-contact-form-f4e3b.firebaseapp.com',
  databaseURL: 'https://portfolio-contact-form-f4e3b.firebaseio.com',
  projectId: 'portfolio-contact-form-f4e3b',
  storageBucket: 'portfolio-contact-form-f4e3b.appspot.com',
  messagingSenderId: '635077569933',
  appId: '1:635077569933:web:c1a35f46a5492e1a7ea1c4',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messageRef = firebase.database().ref('messages');
const contactForm = document.querySelector('#contactForm');

const submitFormHandler = (e) => {
  e.preventDefault();

  const name = getInputValue('name');
  const email = getInputValue('email');
  const number = getInputValue('number');
  const subject = getInputValue('subject');
  const message = getInputValue('message');

  saveMessage(name, email, number, subject, message);

  sendEmail(name, email, number, subject, message);
};

const getInputValue = (id) => {
  return document.getElementById(id).value;
};

const saveMessage = (name, email, number, subject, message) => {
  const newMessageRef = messageRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    number: number,
    subject: subject,
    message: message,
  });
};

const sendEmail = (name, email, number, subject, message) => {
  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'keviniansimon@gmail.com',
    Password: 'ubvsavtspnsfjqyh',
    To: 'keviniansimon@gmail.com',
    From: 'keviniansimon@gmail.com',
    Subject: subject,
    Body: `<h3>Name:</h3> ${name} <br> <h3>Email:</h3> ${email} <br> <h3>Number:</h3> ${number} <br><br> <h3>Message:</h3> ${message}`,
  }).then((message) => {
    if (message !== 'OK') {
      console.log('ERROR');
      setTimeout(submitError('FAILED'), 5000);
    } else {
      document.querySelector('#contactForm').reset();
      window.location.href = 'contact-thank-you.html';
    }
  });
};

contactForm.addEventListener('submit', submitFormHandler);
