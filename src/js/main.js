const navbar = document.querySelector(".nav"),
      bar = document.querySelector(".bars"),
      sections = document.querySelectorAll("section[id]"),
      cart = document.querySelector(".uil-shopping-cart-alt"),
      cartShoping = document.querySelector(".cart"),
      cartBtn = document.querySelector("#cartShop"),
      displayCart = document.querySelector("#displayCart"),
      closeCart = document.querySelector(".close");



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

    console.log(`outif : scrollY = ${scrollY} \n sectionHeight = ${sectionHeight} \n sectionTop = ${sectionTop} \n sectionId = ${sectionId}`)

    if(scrollY > sectionTop && scrollY <=sectionTop + sectionHeight){
      document.querySelector(`.nav a[href*="${sectionId}"]`).classList.add("text-coffee");
      console.log(`active sectionId = ${sectionId} : \n scrollY = ${scrollY} \n sectionHeight = ${sectionHeight} \n sectionTop = ${sectionTop} \n `)
    }else{  
      document.querySelector(`.nav a[href*="${sectionId}"]`).classList.remove("text-coffee");
      //console.log(`nonActive sectionId = ${sectionId} : \n scrollY = ${scrollY} \n sectionHeight = ${sectionHeight} \n sectionTop = ${sectionTop} \n `)
    }
  })
})

cart.addEventListener('click',function(){
  cartShoping.classList.toggle("hidden");
  if(cart.classList.contains("uil-shopping-cart-alt")){
    cart.classList.replace("uil-shopping-cart-alt","uil-times");
  }else{
    cart.classList.replace("uil-times", "uil-shopping-cart-alt");
  }
})


cartBtn.addEventListener("click",function(){
  displayCart.classList.toggle("hidden")
})

closeCart.addEventListener("click",function(){
  displayCart.classList.toggle("hidden")
})