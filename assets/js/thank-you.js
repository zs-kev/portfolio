particlesJS.load('particles-js', '../assets/configs/particles.json');

const submitButton = document.querySelectorAll('.submit-button');

const submitHoverHandler = (e) => {
  const submit = e.target.querySelector('.submit');
  const send = e.target.querySelector('.send');

  gsap.to(submit, { yPercent: '-300%' });
  gsap.to(send, { yPercent: '-50%' });
};

const submitLeaveHandler = (e) => {
  const submit = e.target.querySelector('.submit');
  const send = e.target.querySelector('.send');

  gsap.to(submit, { y: '-50%' });
  gsap.to(send, { y: '250%' });
};

submitButton.forEach((button) => {
  button.addEventListener('mouseenter', submitHoverHandler);
  button.addEventListener('mouseleave', submitLeaveHandler);
});
