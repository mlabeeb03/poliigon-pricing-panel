const button01 = document.querySelector(".button-01");
const button02 = document.querySelector(".button-02");
const buttonPair = document.querySelector('.button-pair');

const prices = document.querySelectorAll(".price")
const billedAnnualy = document.querySelectorAll(".billedAnnualy")

button01.onclick = function(){
    buttonPair.classList.toggle('button01Selected');
    buttonPair.classList.toggle('button02Selected');
    for(let i of billedAnnualy){
        i.style.display = 'initial';
    }
    prices[0].innerHTML = '$13.50 /mo.';
    prices[1].innerHTML = '$21.00 /mo.';
    prices[2].innerHTML = '$147.00 /mo.';
}
button02.onclick = function(){
    buttonPair.classList.toggle('button02Selected');
    buttonPair.classList.toggle('button01Selected');
    for(let i of billedAnnualy){
        i.style.display = 'none';
    }
    prices[0].innerHTML = '$18.00 /mo.';
    prices[1].innerHTML = '$28.00 /mo.';
    prices[2].innerHTML = '$196.00 /mo.';
}