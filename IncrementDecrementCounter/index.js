let counterButtons=document.querySelectorAll('.buttons');
let input=document.querySelector('.input');
let display= document.getElementById('display');
display.innerHTML=input.value;
console.log(display.textContent);

counterButtons.forEach(counterButton => {
    
    counterButton.addEventListener("click", (event) => {
    console.log(event.target.innerText)
    if(event.target.innerText==="-"){
        input.value =Number(input.value) - 1;
        display.style.backgroundColor='red';

    }
    if(event.target.dataset.value==="plus"){ //Or event.target.innerText==="+"
        console.log(event);
        input.value =Number(input.value) + 1;
        display.style.backgroundColor='green';

    }
    display.innerHTML=input.value;
 
    })

    input.addEventListener("keyup", () => {
        display.innerHTML=input.value;


    })

    
  })

