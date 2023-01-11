const projectContainer = document.querySelector('#project-container');


async function getProduct(){
    const projectsData = await fetch('./js/projectsData.json');
    projectArray = await projectsData.json();
    renderProjects(projectArray);
};

function renderProjects(projectArray){
    projectArray.forEach(projectItem => {
        const projectHTML = `
            <div class="card" data-id=${projectItem.id}>
                <a href="${projectItem.link}" class="card-link" target="_blank">
                    <img class="card-img" src="./img/portfolio/${projectItem.imgSrc}" alt="Многостраничный сайт">
                    <h3 class="card-title">${projectItem.title}</h3>
                    <p>${projectItem.description}</p>
                    <hr>
                    <p>
                        <small>Stack:</small>
                        <code>${projectItem.stackTechno.join(', ')}</code>
                    </p>
                </a>
            </div>`;
        projectContainer.insertAdjacentHTML(position='beforeend', projectHTML);
    });

};

getProduct();