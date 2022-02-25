// Home Slider
const sliderEl = document.getElementsByClassName('thumb-img');

for(let i = 0; i < sliderEl.length; i++){
    sliderEl[i].onclick = ()=>{
        if(!sliderEl[i].classList.contains('active')){
            sliderEl[i].classList.add('active');
            document.getElementById('main-img').setAttribute('src',`dist/images/image-product-${i+1}.jpg`)


            for(let j = 0; j < sliderEl.length; j++){
                if(sliderEl[j].classList.contains('active') && sliderEl[j] !== sliderEl[i]){
                    sliderEl[j].classList.remove('active');
                }
            }
        }
    }
};


// Add to Cart Buttons
const incItemEl = document.getElementById('inc');
const decItemEl = document.getElementById('dec');
const ItemEl = document.getElementById('quant');

let itemCount = 1;

const incItem = ()=>{
    itemCount++;
    ItemEl.innerText = itemCount
}

const decItem = ()=>{
    if(ItemEl.innerText !== '1'){
        itemCount--;
        ItemEl.innerText = itemCount
    }   
}

incItemEl.onclick = ()=>{
    incItem();
}

decItemEl.onclick = ()=>{
    decItem();
}

//Cart
const cartBtnEl = document.getElementById('cart-link');
const cartEl = document.getElementById('cart');

cartBtnEl.onclick = (e)=>{
    e.stopPropagation();
    if(cartEl.classList.contains('active')){
        cartEl.classList.remove('active')        
    } else{
        cartEl.classList.add('active')        
    }
}

const hideCart = () =>{
    cartEl.classList.remove('active');        
}

cartEl.onclick = (e)=>{
    e.stopPropagation();
}

const addCartBtnEl = document.getElementById('add-cart');
const emCartEl = document.getElementById('nem-cart');
const nemCartEl = document.getElementById('em-cart');
const cartPrice = document.getElementById('cart-pricing');
const remCartBtnEl = document.getElementById('rem-cart');
const catBadgeEl = document.getElementById('cart-badge');


const addToCart = ()=>{
    nemCartEl.classList.remove('active');
    emCartEl.classList.add('active');
    cartPrice.innerHTML = `$125.00 x ${itemCount} <b>$${itemCount*125}.00</b>`;
    catBadgeEl.classList.add('active');
    catBadgeEl.innerText = itemCount;

}

const remfromCart = ()=>{
    nemCartEl.classList.add('active');
    emCartEl.classList.remove('active');
    catBadgeEl.classList.remove('active');
}

addCartBtnEl.onclick = ()=>{
    addToCart();
}

remCartBtnEl.onclick = ()=>{
    remfromCart();
}