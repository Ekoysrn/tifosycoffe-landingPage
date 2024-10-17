const navbar = document.querySelector(".nav"),
      bar = document.querySelector(".bars"),
      sections = document.querySelectorAll("section[id]");


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