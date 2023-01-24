const colors = ['green', 'red','rgba(133,120,220)','#f15025'];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click',function(){
    const n = getrandomnumber();
    document.body.style.backgroundColor = colors[n];
    color.textContent = colors[n]; 
});

function getrandomnumber(){
    let m = Math.floor(Math.random()*colors.length);
    return m;
}