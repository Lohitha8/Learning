const button=document.querySelector("button");
const body=document.querySelector("body");
const colors=['purple','red','orange','yellow','green','blue','pink'];

body.style.backgroundColor="purple";
button.addEventListener('click',((x) => {
const clrIndex=parseInt(Math.random()*colors.length)
body.style.backgroundColor=colors[clrIndex];
}));