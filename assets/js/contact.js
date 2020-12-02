particlesJS.load('particles-js', '../assets/configs/particles.json');

const submitButton = document.querySelector('.submit-button');

const submitHoverHandler = () => {
  gsap.fromTo('.submit', { y: '0%' }, { y: '-300%' });
  gsap.fromTo('.send', { y: '250%' }, { y: '-50%' });
};

const submitLeaveHandler = () => {
  gsap.fromTo('.submit', { y: '-300%' }, { y: '0%' });
  gsap.fromTo('.send', { y: '-50%' }, { y: '250%' });
};

const submitSendingHandler = () => {
  const name = document.querySelector('#name').value,
    email = document.querySelector('#email').value,
    number = document.querySelector('#number').value,
    subject = document.querySelector('#subject').value,
    message = document.querySelector('#message').value;

  if (!name || !email || !number || !subject || !message) {
    submitError('EMPTY');
  } else {
    gsap.fromTo('.send', { y: '0%' }, { y: '-300%' });
    gsap.fromTo('.sending', { y: '250%' }, { y: '-50%' });
  }

  submitButton.removeEventListener('mouseleave', submitLeaveHandler);
  submitButton.removeEventListener('mouseenter', submitHoverHandler);
};

function submitError(error) {
  if (error === 'FAILED') {
    gsap.fromTo('.sending', { y: '0%' }, { y: '-350%' });
    gsap.fromTo('.error', { y: '250%' }, { y: '-50%' });
    gsap.fromTo(
      submitButton,
      0.1,
      { backgroundColor: 'var(--primarytext-color)' },
      { backgroundColor: '#F42F48' }
    );
    submitButton.removeEventListener('mouseleave', submitLeaveHandler);
    submitButton.removeEventListener('mouseenter', submitHoverHandler);
  } else if (error === 'EMPTY') {
    gsap.fromTo('.send', { y: '0%' }, { y: '-350%' });
    gsap.fromTo('.error', { y: '250%' }, { y: '-50%' });
    gsap.fromTo(
      submitButton,
      0.1,
      { backgroundColor: 'var(--primarytext-color)' },
      { backgroundColor: '#F42F48' }
    );
    submitButton.removeEventListener('mouseleave', submitLeaveHandler);
    submitButton.removeEventListener('mouseenter', submitHoverHandler);
  }

  setTimeout(() => {
    gsap.fromTo('.submit', { y: '-300%' }, { y: '0%' });
    gsap.fromTo('.error', { y: '-50%' }, { y: '250%' });
    gsap.fromTo(
      submitButton,
      0.5,
      { backgroundColor: '#F42F48' },
      { backgroundColor: 'var(--primarytext-color)' }
    );
    submitButton.addEventListener('mouseleave', submitLeaveHandler);
    submitButton.addEventListener('mouseenter', submitHoverHandler);
  }, 5000);
}

// barba.init({
//     views: [
//       {
//         namespace: 'contact',
//         beforeEnter() {
//           animateSlides();
//           logo.href = './index.html';
//         },
//         beforeLeave() {
//           slideScene.destroy();
//           pageScene.destroy();
//           controller.destroy();
//         },
//       },
//       {
//         namespace: 'fashion',
//         beforeEnter() {
//           logo.href = '../index.html';
//           detailAnimation();
//         },
//       },
//     ],
//     transitions: [
//       {
//         leave({ current, next }) {
//           let done = this.async();
//           const timeLine = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
//           timeLine.fromTo(current.container, 1, { opacity: 1 }, { opacity: 0 });
//           timeLine.fromTo(
//             '.swipe',
//             0.75,
//             { x: '-100%' },
//             { x: '0%', onComplete: done },
//             '-=0.5'
//           );
//         },
//         enter({ current, next }) {
//           let done = this.async();
//           window.scrollTo(0, 0);
//           const timeLine = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
//           timeLine.fromTo(
//             '.swipe',
//             1,
//             { x: '0%' },
//             { x: '100%', stagger: 0.25, onComplete: done }
//           );
//           timeLine.fromTo(next.container, 1, { opacity: 0 }, { opacity: 1 });
//           timeLine.fromTo(
//             '.nav-header',
//             1,
//             { y: '-100%' },
//             { y: '0%', ease: 'power2.inOut' },
//             '-=1.5'
//           );
//         },
//       },
//     ],
//   });

submitButton.addEventListener('mouseenter', submitHoverHandler);
submitButton.addEventListener('mouseleave', submitLeaveHandler);
submitButton.addEventListener('click', submitSendingHandler);
