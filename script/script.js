const navToggler = document.getElementById('toggler');

// when the collapse icon of nav is clicked
document.addEventListener('click', e => {

    if (!e.target.matches('#toggler')) return;

    const bioPic = document.getElementById('bio-pic');

    const brand = document.getElementById('brand')
        // toggle profile pic to avoid getting in the way of nav
    bioPic.classList.toggle('hidden')
        // toggle title class from brand to remove left margin
    brand.classList.toggle('title')

})

document.addEventListener('click', e => {

    if (!e.target.matches('#nav-projects')) return;
    console.log('clicked')

    e.preventDefault();

    const projectsHtml = getPages('pages/project.html');

    projectsHtml.then(data => {
            console.log(object)
        }

    )

})

// get the projects for the page
const getPages = async(url) => {
    const page = await fetch(url);
    return page;
}

const navProjects = document.getElementById('nav-projects')