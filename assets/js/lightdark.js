const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

document.querySelector('.toggle-button').addEventListener('click', () => {
    let lightMode,
        darkMode;

    if(localStorage.getItem('lightMode') === null) {
        lightMode = [];
    } else {
        localStorage.removeItem('lightMode');     
    }

    if(localStorage.getItem('darkMode') === null) {
        darkMode = [];
    } else {
        localStorage.removeItem('darkMode');
    }

    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark')) {
        darkMode.push('dark');
        localStorage.setItem('darkMode', darkMode);
    } else {
        lightMode.push('light');
        localStorage.setItem('lightMode', lightMode);
    }
})

if(userPrefersDark){
    document.body.classList.add('dark');
}

if(localStorage.getItem('darkMode') === 'dark') {
    document.body.classList.add('dark');
} else if (localStorage.getItem('lightMode') === 'light') {
    document.body.classList.remove('dark');
}