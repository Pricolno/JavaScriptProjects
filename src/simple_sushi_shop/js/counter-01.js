
console.log("Hello world from file.js !")

const btnMinus = document.querySelector('[data-action="minus"]')
const btnPlus = document.querySelector('[data-action="plus"]')
const counter = document.querySelector('[data-counter]')

// console.log(btnMinus)  

btnMinus.addEventListener('click', function(){
    console.log('Minus click');
    if (parseInt(counter.innerText) > 1){
        counter.innerText = --counter.innerText        
    };
});



btnPlus.addEventListener('click', function(){
    console.log('Plus click');

    counter.innerText = ++counter.innerText; 

});
 
