// JavaScript Document
// JavaScript Document
console.log("hi");

Array.from(document.querySelectorAll(".m-nav button")).forEach(a=>a.addEventListener("click", ()=> {
    document.querySelector(".m-nav ul").classList.toggle("active");
}))