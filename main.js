const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const order = document.querySelector('.order-toggle');
const mobileOrder = document.querySelector('.order-toggler');
const orderForm = document.querySelector('.order-form');
const submit = document.getElementById('submit');
const exitOrder = document.querySelector('.exit');
const orderResult = document.querySelector('.order-result');
const viewResult = document.getElementById('view');

hamburger.addEventListener('click', e=>{
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('active');

})

order.addEventListener('click', e=>{
  orderForm.classList.toggle('active');
})

mobileOrder.addEventListener('click', e=>{
  orderForm.classList.toggle('active');
  mobileNav.classList.remove('active');
  hamburger.classList.remove('active');
})

exitOrder.addEventListener('click', e=>{
  orderForm.classList.remove('active');
})


//Geting The Orders From The Users
const milkTea = document.getElementById('milk-tea');
const milkTeaContents = document.querySelector('.milk-tea-contents');

const taro = document.getElementById('taro');
const winter = document.getElementById('winter');
const nutella = document.getElementById('nutella');
const matcha = document.getElementById('matcha');

const selectionTaro = document.querySelector('.selection-taro');
const selectionWinter = document.querySelector('.selection-winter');
const selectionNutella = document.querySelector('.selection-nutella');
const selectionMatcha = document.querySelector('.selection-matcha');

const quantityTaro = document.getElementById('quantity-taro');
const quantityWinter = document.getElementById('quantity-winter');
const quantityNutella = document.getElementById('quantity-nutella');
const quantityMatcha = document.getElementById('quantity-matcha');

const sizeTaro = document.getElementById('size-taro');
const sizeWinter = document.getElementById('size-winter');
const sizeNutella = document.getElementById('size-nutella');
const sizeMatcha = document.getElementById('size-matcha');


milkTea.addEventListener('click', e=>{
  if(milkTea.checked == true){
    milkTeaContents.classList.toggle('active');
  }
  else {
    milkTeaContents.classList.remove('active');
    taro.checked = false;
    winter.checked = false;
    nutella.checked = false;
    matcha.checked = false;
    selectionTaro.classList.remove('active');
    selectionWinter.classList.remove('active');
    selectionNutella.classList.remove('active');
    selectionMatcha.classList.remove('active');
  }
})



taro.addEventListener('click', e=>{
  if(taro.checked === true){    
    selectionTaro.classList.toggle('active');
  }
  else selectionTaro.classList.remove('active');
    
})

winter.addEventListener('click', e=>{
  if(winter.checked === true){    
    selectionWinter.classList.toggle('active'); 
  }
  else  selectionWinter.classList.remove('active');
})

nutella.addEventListener('click', e=>{
  if(nutella.checked === true){    
    selectionNutella.classList.toggle('active');
  }
  else  selectionNutella.classList.remove('active');
})

matcha.addEventListener('click', e=>{
  if(matcha.checked === true){    
    selectionMatcha.classList.toggle('active');
  }
  else  selectionMatcha.classList.remove('active');
})

//delivery fee show
const delivery = document.getElementById('destination');
const deliveryContainer = document.querySelector('.delivery-fee');

let fee = 0;
delivery.addEventListener('change', e=>{
  fee = parseInt(e.target.value);
  deliveryContainer.innerHTML = "₱" + fee;
})
  
let countT = 0;
quantityTaro.addEventListener('change', e=>{
  countT = parseInt(e.target.value);
  console.log(countT);
})
  
let sizeT = 0;
sizeTaro.addEventListener('change', e=>{
  sizeT = parseInt(e.target.value);
  console.log(sizeT);
})




submit.addEventListener('click', e=>{
  orderResult.classList.toggle('active');
  orderForm.classList.remove('active');
})





