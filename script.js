const formE1 = document.querySelector(".form");
const inputE1 = document.querySelector(".input");
const ulE1 = document.querySelector(".list");
formE1.addEventListener("submit",(event)=>
{
    event.preventDefault();
    console.log(inputE1.value);
    toDoList();
});
function toDoList(){
    let newTask =inputE1.value;
    const liE1 = document.createElement("li");
    liE1.innerText = newTask;
    ulE1.appendChild(liE1);
    inputE1.value="";
    const checkBtn = document.createElement("div");
    checkBtn.innerHTML = `<i class="fa-solid fa-square-check"></i> `;
    liE1.appendChild(checkBtn);
    const trashBtn = document.createElement("div");
    trashBtn.innerHTML = `<i class="fa-solid fa-trash"></i> `;
    liE1.appendChild(trashBtn);
    checkBtn.addEventListener("click",()=>{
        liE1.classList.toggle("checked");
    })
    trashBtn.addEventListener("click",()=>{
        liE1.remove();
    })
}
