particlesJS.load('particles-js', '../assets/configs/particles.json');

const submitButton = document.querySelectorAll('.submit-button');

const submitHoverHandler = (e) => {
    const submit = e.target.querySelector('.submit');
    const send = e.target.querySelector('.send');

  gsap.fromTo(submit, { y: '0%' }, { y: '-250%' });
  gsap.fromTo(send, { y: '250%' }, { y: '-50%' });
};

const submitLeaveHandler = (e) => {
    const submit = e.target.querySelector('.submit');
    const send = e.target.querySelector('.send');

  gsap.fromTo(submit, { y: '-250%' }, { y: '0%' });
  gsap.fromTo(send, { y: '-50%' }, { y: '250%' });
};

submitButton.forEach(button => {
    button.addEventListener('mouseenter', submitHoverHandler);
    button.addEventListener('mouseleave', submitLeaveHandler);
});
