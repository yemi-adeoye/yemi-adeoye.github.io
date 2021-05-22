const hidePicOnNavButtonClick = () => {

    const bioPic = document.getElementById('bio-pic');

    const brand = document.getElementById('brand')

    // toggle profile pic to avoid getting in the way of nav
    bioPic.classList.toggle('hidden')

    // toggle title class from brand to remove left margin
    brand.classList.toggle('title')
}

const loadPage = async(url, id) => {
    // read page contents
    const page = await fetch(url)
        .then(data => data.json())
        .then((data) => {
            const body = document.getElementById(id);
            body.innerHTML = data.data;
            console.log(data);
        })
        .catch(e => {
            body.innerHTML = '<div>Awww snap! Something went wrong! Try reloading the page ensuring that you have an internet connection. </div>' + e;
        });
}

const eventHandler = (eventType, origin, callback) => {

    document.addEventListener(eventType, e => {

        if (!e.target.matches(origin)) return;

        e.preventDefault();

        callback();

    })
}


/* global code goes here */
const navToggler = document.getElementById('toggler');
const navProjects = document.getElementById('nav-projects');

// when the projects link is clicked
eventHandler('click', '#nav-projects', () => { loadPage('https://raw.githubusercontent.com/yemi-adeoye/yemi-adeoye.github.io/main/pages/projects.html', 'body') })
eventHandler('click', '#toggler', hidePicOnNavButtonClick);

document.onload(
    eventHandler('click', '#nav-projects', () => { loadPage('https://raw.githubusercontent.com/yemi-adeoye/yemi-adeoye.github.io/main/pages/projects.html', 'body') })
)