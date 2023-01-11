const contactsContainer = document.querySelector('#icons-container');
const contactBtn = document.querySelector('a.footer-button');

async function getContacts(){
    const contactsData = await fetch('./js/contactsData.json');

    contactsArray = await contactsData.json();
    // console.log(contactsArray);
    
    renderContacts(contactsArray);
};


function renderContacts(contactsArray){
    contactsArray.forEach(contactsItem => {
        const contactHTML = `
        <a href="${contactsItem.link}" target="_blank">
            <img src="./img/icons/${contactsItem.imgSrc}" alt="${contactsItem.title}">
        </a>
        `;
        contactsContainer.insertAdjacentHTML(position='beforeend', contactHTML);
    });

};


getContacts();

function rendercontactBtn(){    
    contactBtn.href = "https://t.me/pricolno_orig";
    contactBtn.innerText = "Связаться в telegramm";
};

rendercontactBtn();


