particlesJS.load('particles-js', '../assets/configs/particles.json');

const submitButton = document.querySelector('.submit-button');

const submitHoverHandler = () => {
  gsap.fromTo('.submit', { y: '0%' }, { y: '-250%' });
  gsap.fromTo('.send', { y: '250%' }, { y: '-50%' });
};

const submitLeaveHandler = () => {
  gsap.fromTo('.submit', { y: '-250%' }, { y: '0%' });
  gsap.fromTo('.send', { y: '50%' }, { y: '250%' });
};

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
