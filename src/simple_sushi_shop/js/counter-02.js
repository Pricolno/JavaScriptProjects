//  Теперь прослушка клика на всём окне


window.addEventListener('click', function(event){
    //console.log("Click window!!")

    let counter;
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
        const countWrapper = event.target.closest('.counter-wrapper');
        counter = countWrapper.querySelector('[data-counter]');
    }

    if (event.target.dataset.action === 'plus'){
        counter.innerText = ++counter.innerText        
    };

    if (event.target.dataset.action === 'minus'){
        if (parseInt(counter.innerText) > 1){
            counter.innerText = --counter.innerText        
        }else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1){
                console.log("DELETE product in cart");
                event.target.closest('.cart-item').remove();


                toogleCartStatus();

                calcCartPriceAndDelivery();
            };     
    };
 

    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
        calcCartPriceAndDelivery();
    };
    
       

});