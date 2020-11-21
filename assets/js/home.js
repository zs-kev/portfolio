particlesJS.load('particles-js', 'assets/configs/particles.json');

document.querySelectorAll('#featured-project').forEach((project) => {
  project.addEventListener('mouseenter', (e) => {
    if (e.target.classList.contains('huddle')) {
      document.body.classList.toggle('huddle');
    } else if (e.target.classList.contains('axio')) {
      document.body.classList.toggle('axio');
    } else if (e.target.classList.contains('kevin')) {
      document.body.classList.toggle('kevin');
      const randomNumber = Math.floor(Math.random() * 6);
      const bodyKevin = document.querySelector('.kevin');

      switch (randomNumber) {
        case 0:
          bodyKevin.style.backgroundColor = '#2C4AFF';
          break;
        case 1:
          bodyKevin.style.backgroundColor = '#3DE4A3';
          break;
        case 2:
          bodyKevin.style.backgroundColor = '#FFB739';
          break;
        case 3:
          bodyKevin.style.backgroundColor = '#FC4FB1';
          break;
        case 4:
          bodyKevin.style.backgroundColor = '#BB38FF';
          break;
        case 5:
          bodyKevin.style.backgroundColor = '#FC4F4F';
          break;  
      }
    }
  });
});

document.querySelectorAll('#featured-project').forEach((project) => {
  project.addEventListener('mouseleave', (e) => {
    if (e.target.classList.contains('huddle')) {
      document.body.classList.toggle('huddle');
    } else if (e.target.classList.contains('axio')) {
      document.body.classList.toggle('axio');
    } else if (e.target.classList.contains('kevin')) {
      const bodyKevin = document.querySelector('.kevin');
      bodyKevin.style.backgroundColor = null;
      document.body.classList.toggle('kevin');
    }
  });
});
