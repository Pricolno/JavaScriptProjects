const cartWrapper = document.querySelector('.cart-wrapper');
 

window.addEventListener('click', function(event){
    


    if (event.target.hasAttribute('data-cart')){
         //console.log("Click on Cart!!!")

        const card = event.target.closest('.card');

        const productInfo = {
        id : card.dataset.id,
        imageSrc : card.querySelector(".product-img").getAttribute('src'),
        title: card.querySelector('.item-title').innerText,
        itemsInBox: card.querySelector('[data-items-in-box]').innerText,
        weight: card.querySelector('.price__weight').innerText,
        price: card.querySelector('.price__currency').innerText,
        counter: card.querySelector('[data-counter]').innerText
        };

        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
    
        if (itemInCart){
            const countElement = itemInCart.querySelector('[data-counter]');
            countElement.innerText = parseInt(countElement.innerText) + parseInt(productInfo.counter);
        } else{    
            const cartItemHTML = `
            <div class="cart-item" data-id="${productInfo.id}">
                <div class="cart-item__top">
                    <div class="cart-item__img">
                        <img src="${productInfo.imageSrc}" alt="${productInfo.title}">
                    </div>
                    <div class="cart-item__desc">
                        <div class="cart-item__title">${productInfo.title}</div>
                        <div class="cart-item__weight">${productInfo.itemsInBox} шт. / ${productInfo.title}г.</div>

                        <!-- cart-item__details -->
                        <div class="cart-item__details">

                            <div class="items items--small counter-wrapper">
                                <div class="items__control" data-action="minus">-</div>
                                <div class="items__current" data-counter="">${productInfo.counter}</div>
                                <div class="items__control" data-action="plus">+</div>
                            </div>

                            <div class="price">
                                <div class="price__currency">${productInfo.price}</div>
                            </div>

                        </div>
                        <!-- // cart-item__details -->

                    </div>
                </div>
            </div>
            <!-- // Cart item -->`;

            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        };
    
        //
        card.querySelector('[data-counter]').innerText = 1;    
    
        //
        toogleCartStatus();
    };
    



});
