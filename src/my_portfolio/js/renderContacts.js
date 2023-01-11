const contactsContainer = document.querySelector('#icons-container');
const contactBtn = document.querySelector('a.footer-button');

async function getContacts(){
    let locList = window.location.pathname.split('/');
    let pad = "";
    if (locList.at(-2) == 'pages'){
        pad = "../";
    };

    const contactsData = await fetch(`./${pad}js/contactsData.json`);
    
    const contactsArray = await contactsData.json();    
    renderContacts(contactsArray);
};


function renderContacts(contactsArray){
    let locList = window.location.pathname.split('/');
    let pad = "";
    if (locList.at(-2) == 'pages'){
        pad = "../";
    };

    contactsArray.forEach(contactsItem => {
        const contactHTML = `
        <a href="${contactsItem.link}" target="_blank">
            <img src="./${pad}img/icons/${contactsItem.imgSrc}" alt="${contactsItem.title}">
        </a>
        `;
        contactsContainer.insertAdjacentHTML('beforeend', contactHTML);
    });

};


getContacts();

function rendercontactBtn(){    
    contactBtn.href = "https://t.me/pricolno_orig";
    contactBtn.innerText = "Связаться в telegramm";
};

rendercontactBtn();
