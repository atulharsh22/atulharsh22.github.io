document.querySelector("#contact-github").addEventListener('click',function(){
    window.open("https://github.com/atulharsh22");
});

document.querySelector("#contact-linkedin").addEventListener('click',function(){
    window.open("https://www.linkedin.com/in/atul-harsh/");
});


document.querySelector("#project-1-deployed").addEventListener('click',function(){
    window.open("https://fastidious-fudge-60d814.netlify.app/");
});

document.querySelector("#project-1-github").addEventListener('click',function(){
    window.open("https://github.com/gulam160/beneficial-spiders-5753");
});

document.querySelector("#project-2-deployed").addEventListener('click',function(){
    window.open("https://dashing-pie-f1ac87.netlify.app/");
});

document.querySelector("#project-2-github").addEventListener('click',function(){
    window.open("https://github.com/skshm2000/SendInBlue-Online-Marketing-Services");
});

document.querySelector("#project-3-deployed").addEventListener('click',function(){
    window.open("https://whimsical-lebkuchen-84f0b3.netlify.app/");
});

document.querySelector("#project-3-github").addEventListener('click',function(){
    window.open("https://github.com/atulharsh22/youtube-clone");
});

document.querySelector("#project-4-deployed").addEventListener('click',function(){
    window.open("https://exquisite-stroopwafel-1b750a.netlify.app/");
});

document.querySelector("#project-4-github").addEventListener('click',function(){
    window.open("https://github.com/pankajmorecreativity/plastic-scent-4061");
});


document.querySelector("#resume-button-2").addEventListener('click',function(){
    
    window.open("https://drive.google.com/file/d/1dinOVVjudjovgnnKOD5hIyQQ-TZNwOzy/view?usp=sharing","_blank");
});

document.querySelector("#resume-button-1").addEventListener('click',function(){
    
    window.open("https://drive.google.com/file/d/1dinOVVjudjovgnnKOD5hIyQQ-TZNwOzy/view?usp=sharing","_blank");
});





const hamburger = document.querySelector(".hamburger");

const navmenu = document.querySelector(".navmenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
});

document.querySelectorAll(".navlink ").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
    
}));