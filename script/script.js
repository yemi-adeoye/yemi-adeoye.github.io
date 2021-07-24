const hidePicOnNavButtonClick = () => {

    const bioPic = document.getElementById('bio-pic');

    const brand = document.getElementById('brand')

    // toggle profile pic to avoid getting in the way of nav
    bioPic.classList.toggle('hidden')

    // toggle title class from brand to remove left margin
    brand.classList.toggle('title')
}

const getProjectHtml = (project) => {
    return `<div class="row">
    <h2 class="project-header">${project.title}</h2>
    <a href="${project.href}" class="d-block"><img src="${project.img}" class="img project-image d-block" alt=""/></a>
    <p class="project-desc">
    ${project.desc}
      <a href="${project.href}">here</a> for more.
    </p>
  </div>`;
}

const getProjectsHtml = (projects) => {
    let projectsHtml;
    for (let i = 0; i < projects.length; i++) {
        projectsHtml += getProjectHtml[i];
    }
    return `<div class="row p-5 d-block"><h1 class="main">Some Projects</h1></div>
<div class="project-container p-5">
${projects} </div>`;
}

const loadPage = async(url, id) => {
    // read page contents
    const page = await fetch(url)
        .then(data => data.json())
        .then((data) => {
            const body = document.getElementById(id);
            body.innerHTML = data.data;
            console.log(getProjectHtml(data.data[0]));
        })
        .catch(e => {
            body.innerHTML = '<div>Awww snap! Something went wrong! Try reloading the page ensuring that you have an internet connection. </div>' + e;
        });
}

const loadProjects = async(url, id) => {
    // read page contents
    const page = await fetch(url)
        .then(data => data.json())
        .then((data) => {
            const body = document.getElementById(id);
            body.innerHTML = getProjectsHtml(data.data);
            console.log(getProjectHtml(data.data[0]));
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
eventHandler('click', '#nav-projects', () => { loadProjects('https://raw.githubusercontent.com/yemi-adeoye/yemi-adeoye.github.io/refactor/pages/projects.json', 'body') })
eventHandler('click', '#home', () => { loadPage('https://raw.githubusercontent.com/yemi-adeoye/yemi-adeoye.github.io/main/pages/home.json', 'body') })
eventHandler('click', '#toggler', hidePicOnNavButtonClick);

window.onload = () => {
    console.log("loadedex")
    loadPage('https://raw.githubusercontent.com/yemi-adeoye/yemi-adeoye.github.io/main/pages/home.json', 'body');
}