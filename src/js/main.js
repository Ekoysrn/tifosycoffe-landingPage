const navbar = document.querySelector(".nav"),
      bar = document.querySelector(".bars"),
      sections = document.querySelectorAll("section[id]"),
      cartBtn = document.querySelector(".uil-shopping-cart-alt"),
      cartShoping = document.querySelector(".cart"),
      notif = document.querySelector(".notif");


bar.addEventListener("click",function(){
  navbar.classList.toggle("hidden");
  if(bar.classList.contains("uil-bars")){
    bar.classList.replace("uil-bars","uil-times");
  }else{
    bar.classList.replace("uil-times","uil-bars");
  }
})



window.addEventListener("scroll",function(){
  sections.forEach(current => {
    let scrollY = window.scrollY;
    
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute("id");

    if(scrollY > sectionTop && scrollY <=sectionTop + sectionHeight){
      document.querySelector(`.nav a[href*="${sectionId}"]`).classList.add("text-coffee");
    }else{  
      document.querySelector(`.nav a[href*="${sectionId}"]`).classList.remove("text-coffee");
    }
  })
})


cartBtn.addEventListener('click',function(){
  cartShoping.classList.toggle("hidden");
  notif.classList.toggle("hidden")
  if(cartBtn.classList.contains("uil-shopping-cart-alt")){
    cartBtn.classList.replace("uil-shopping-cart-alt","uil-times");
  }else{
    cartBtn.classList.replace("uil-times", "uil-shopping-cart-alt");
  }
})

notif.classList.add("hidden");

// onkeyup input number
function enforceMinMax(el) {
  if (el.value != "") {
    if (parseInt(el.value) < parseInt(el.min)) {
      el.value = el.min;
    }
    if (parseInt(el.value) > parseInt(el.max)) {
      el.value = el.max;
    }
  }
}



// stay tuned coming soon

function stayTuned(){
  alert("stay tuned guys coming soon!")
}

// cart
let cart = [];

// function add cart
function addToCart(id){

  const productId = document.querySelector(`.addCart[data-id="${id}"]`);
  const productName = productId.querySelector("h1").textContent;
  const productImage = productId.querySelector("img").src;
  const productPrice = parseFloat(productId.querySelector("span ").textContent);

  const doubleCart = cart.find(item => item.id === id);

  if(doubleCart){
    doubleCart.quantity++
  }else{
    cart.push({   
      id : id,
      name : productName,
      img : productImage,
      price : productPrice,
      quantity : 1
    })
  }

  renderCart()
} 

// function remove cart
function removeCart(id){
  cart = cart.filter(item => item.id !== id);
  
  renderCart();
}

// function update quantity cart
function updateQuantity(id,newQuantity){
  const cartItem = cart.find(item => item.id === id);

  if(cartItem && newQuantity > 0){
    cartItem.quantity = newQuantity;
  }else{
    removeCart(id)
  }

  renderCart();
}

// function rendercart  
function renderCart(){
  const container = document.querySelector(".cartItem"),
        total = document.querySelector("#total");

  container.innerHTML = '';
  let totalCart = 0;
  let totalNotif = 0;
  
  notif.classList.remove("hidden");

  cart.forEach(item => {
    totalCart += item.price * item.quantity;
    totalItem = item.price * item.quantity;


    totalNotif += item.quantity

    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<div class="bg-[#ce8840]/60 rounded-md mt-8 p-2 md:p-5 flex relative" >
          
            <img src="${item.img}" alt="" class="size-16">
          <div class="">
            <h1 class="font-medium text-lg text-slate-50">${item.name}</h1>
            <p class="text-base text-slate-50">$ <span>${item.price.toFixed(2)}</span> &times; <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" class="plus primary text-slate-50 rounded-sm py-[1px] px-2">&minus;</button>
              <input type="number" min="1" max="99" value="${item.quantity}" class="w-9 text-center primary rounded-sm py-[1px] px-2 focus:outline-none" onkeyup="enforceMinMax(this)" onchange="updateQuantity(${item.id}, this.value)">
              <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" class="min primary text-slate-50 rounded-sm py-[1px] px-2">&plus;</button>
              &equals; &dollar; <span> ${totalItem.toFixed(2)}</span></p>
          </div>
          <button onclick="removeCart(${item.id})" class="absolute top-1 right-2 cursor-pointer text-slate-50"><i class="uil uil-trash-alt"></i></button>
        </div>`;

        container.appendChild(newDiv);
      });
      
      total.innerHTML = totalCart.toFixed(2);
      notif.textContent = totalNotif;
}
