let lefttop = document.querySelector("#left-top");
let leftbottom = document.querySelector("#left-bottom");
let righttop = document.querySelector("#right-top");
let rightbottom = document.querySelector("#right-bottom");
// let container=document.querySelector("#container");
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

});

function animate(){

    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;

    let moveX = (mouseX - centerX) *0.25;
    let moveY = (mouseY - centerY) * 0.49;



    lefttop.style.transform =`translate( calc(-50% - ${moveX}px),  calc(-50% - ${moveY}px))`;

    leftbottom.style.transform =`translate(calc(-50% - ${moveX}px), calc(-50% + ${moveY}px))`;
    righttop.style.transform =`translate(calc(-50% + ${moveX}px), calc(-50% - ${moveY}px))`;

    rightbottom.style.transform =`translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;

    requestAnimationFrame(animate);
}

animate();