const increase = document.getElementById("IncreaseButton")
const reset = document.getElementById("ResetButton")
const decrease = document.getElementById("DecreaseButton")
const count = document.getElementById("CountLabel")
let cont = 0;
var som = document.createElement('audio');
som.src = 'som.mp3';


function updateClass() {
    if (cont % 10 === 0 && cont !== 0) {
        count.classList.add("conquista");
        count.classList.add("teste");
        setTimeout(() => {
            count.classList.remove("conquista");
            som.play();
        }, 1000);
}
    else if (cont % 2 === 0 ) {
        count.classList.remove("teste");
        count.classList.add("normal");
    }

 else {
        count.classList.add("teste");
    }

}
increase.onclick = function(){
    cont++;
    count.textContent = cont;
    updateClass();
}
    

reset.onclick = function(){
    count.classList.remove("normal");
    count.classList.add("teste");
    cont = 0;
    count.textContent = cont
    updateClass();

}
decrease.onclick = function(){
    cont--;
    count.textContent = cont
    updateClass();}
   