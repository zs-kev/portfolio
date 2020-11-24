const BURGER = document.querySelector('.hamburger');

const navToggle = (e) => {
  if (!e.target.classList.contains('active')) {
    e.target.classList.add('active');
    gsap.to('.top-line', 0.5, { rotate: '45', y: 5 });
    gsap.to('.bottom-line', 0.5, { rotate: '-45', y: -5 });
    gsap.fromTo('.middle-line', 0.5, { x: '0%' }, { x: '-150%' });
    gsap.fromTo('.middle-line', 0.5, { opacity: 1 }, { opacity: 0 });
    gsap.fromTo('.nav', 1, { height: '0%' }, { height: '100%' });
    gsap.fromTo('.nav', 1, { padding: '0rem' }, { padding: '0rem 1rem 8rem' });
    gsap.to('header', 1, { backgroundColor: 'var(--background-color)' });
    gsap.to('header', 1, { height: '100vh' });
  } else {
    e.target.classList.remove('active');
    gsap.to('.top-line', 0.5, { rotate: '0', y: 0 });
    gsap.to('.bottom-line', 0.5, { rotate: '0', y: 0 });
    gsap.fromTo('.middle-line', 0.5, { x: '-150%' }, { x: '0%' });
    gsap.fromTo('.middle-line', 0.5, { opacity: 0 }, { opacity: 1 });
    gsap.fromTo('.nav', 1, { height: '100%' }, { height: '0%' });
    gsap.fromTo('.nav', 1, { padding: '0rem 1rem 8rem' }, { padding: '0rem' });
    gsap.to('header', 1, { backgroundColor: 'transparent' });
    gsap.to('header', 1, { height: '0' });
  }
};

BURGER.addEventListener('click', navToggle);
