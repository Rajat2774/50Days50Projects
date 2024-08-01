const input=document.getElementById("search-bar");
const btn=document.querySelector(".button");
const container=document.querySelector(".search");


btn.addEventListener("click",()=>{
    container.classList.toggle("active"); //toggle removes and add based on the state
    input.focus()
});