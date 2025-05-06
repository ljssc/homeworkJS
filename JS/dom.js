const testText = document.querySelector(".test-Text");
testText.innerHTML = "Привет, мир!";
testText.style.color = "#00BFFF";
testText.style.backgroundColor = "ffe926";
testText.style.width = "100px";
testText.style.border = "2px pink solid";




// пункт 2
const email = document.getElementById("email");
const cb = document.getElementById("remember");
const btn = document.getElementById("btn");
btn.style.color = "cbff78";
btn.style.backgroundColor = "ffe926";
email.setAttribute("value", "mail@mail.ru");
email.setAttribute("readonly","");

btn.textContent = '«Войти»';

cb.setAttribute("checked","");

// пункт 3

const link = document.createElement("a");
link.setAttribute("href", "https://midis.ru/");
link.setAttribute("target","_blank");
link.textContent = "ССЫЛКА НА САЙТ";
link.classList.add("link");
link.style.textDecoration = 0;
link.style.color = "Black";
const linkA = document.getElementById("linkA");
linkA.append(link);



//пункт 4


const boxA = document.getElementById("boxA");
boxA.style.backgroundColor = "#cbff78";
boxA.style.width = "200px";
boxA.style.height = "525px";
boxA.style.border = "2px gray solid";

const btn2 = document.getElementById("btn2");
const circle = document.querySelector(".circle");

btn2.addEventListener("click",function(){
    //circle.style.backgroundColor = "blue";
    circle.classList.add("circleMove");
});