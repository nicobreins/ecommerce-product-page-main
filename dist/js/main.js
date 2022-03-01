// Slider
const sliderChange = (e) =>{
    e.target.classList.add('active');

    const targetSiblings = e.target.parentNode.children;
    let targetSiblingsArr = Array.from(targetSiblings);
    let targetIndex = targetSiblingsArr.indexOf(e.target);
    e.target.parentElement.previousSibling.previousSibling.children[0].setAttribute('src',`dist/images/image-product-${targetIndex + 1}.jpg`);

    for(let i = 0; i < targetSiblings.length; i++){
        if(targetSiblings[i].classList.contains('active') && targetSiblings[i] !==  e.target){
            targetSiblings[i].classList.remove('active')
        }        
    }
}

document.getElementById('main-img').onclick = (e)=>{
    const lbx = document.getElementById('lbx');
    lbx.classList.add('active');
    const updateImgSrc = e.target.getAttribute('src');
    document.getElementById('main-img-lbx').setAttribute('src', updateImgSrc);
    const lbxSlider = Array.from(Array.from(lbx.children)[0].children)[2].children;
    for(let i = 0; i < lbxSlider.length; i++){
        if(lbxSlider[i].classList.contains('active')){
            lbxSlider[i].classList.remove('active')
        }
        lbxSlider[updateImgSrc[updateImgSrc.length - 5] - 1].classList.add('active')      
    }
}

const arrFunPrv = (e)=>{
    let mainLbxImg = document.getElementById('main-img-lbx').getAttribute('src');
    let mainLbxImgIndex = Number(mainLbxImg[mainLbxImg.length - 5]);
    if(mainLbxImgIndex >= 2){
        document.getElementById(`lbx-th-${mainLbxImgIndex - 1}`).click();
    }
}

const arrFunNxt = (e)=>{
    let mainLbxImg = document.getElementById('main-img-lbx').getAttribute('src');
    let mainLbxImgIndex = Number(mainLbxImg[mainLbxImg.length - 5]);
    if(mainLbxImgIndex <= 3){
        document.getElementById(`lbx-th-${mainLbxImgIndex + 1}`).click();
    }
}

const arrFunNxtAno = (e, id)=>{
    const mainImgEl = document.getElementById(id);
    const mainImgElIndex = Number(mainImgEl.getAttribute('src')[mainImgEl.getAttribute('src').length - 5]);
    if(mainImgElIndex <= 3){
        mainImgEl.setAttribute('src', `dist/images/image-product-${mainImgElIndex + 1}.jpg`)
    }
}

const arrFunPrvAno = (e, id)=>{
    const mainImgEl = document.getElementById(id);
    const mainImgElIndex = Number(mainImgEl.getAttribute('src')[mainImgEl.getAttribute('src').length - 5]);
    if(mainImgElIndex >= 2){
        mainImgEl.setAttribute('src', `dist/images/image-product-${mainImgElIndex - 1}.jpg`)
    }
}

document.getElementById('close-lbx').onclick = ()=>{
    document.getElementById('lbx').classList.remove('active');
}


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



// menu

document.getElementById('menu-btn').onclick = ()=>{
    document.getElementById('links').classList.add('active');
}

document.getElementById('nav-close').onclick = ()=>{
    document.getElementById('links').classList.remove('active');
}