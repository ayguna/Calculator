// function toplama(a,b) {
//     return a+b;
// }
//     console.log(toplama(3,5));

// function cixma(a,b){
//     return a-b;
   
// }
//     console.log(cixma(5,2));

// function vurma(a,b){
//     return a*b;
// }
//     console.log(vurma(2,4));

// function bolme(a,b){
//     return a/b;
// }
//     console.log(bolme(4,2));

const buttonAC = document.querySelector('.yenidenBasla');
const buttonMenfi = document.querySelector('.menfi');
const buttonPracent = document.querySelector('.pracent');
const buttonBolme = document.querySelector('.bolme');
const buttonYeddi = document.querySelector('.yeddi');
const buttonSekkiz = document.querySelector('.sekkiz');
const buttonDoqquz = document.querySelector('.doqquz');
const buttonVurma = document.querySelector('.vurma');
const buttonDord = document.querySelector('.dord');
const buttonBesh = document.querySelector('.besh');
const buttonAlti = document.querySelector('.alti');
const buttonCixma = document.querySelector('.cixma');
const buttonBir = document.querySelector('.bir');
const buttonIki = document.querySelector('.iki');
const buttonUch = document.querySelector('.uch');
const buttonToplama = document.querySelector('.toplama');
const buttonSifir = document.querySelector('.sifir');
const buttonNoqte = document.querySelector('.noqte');
const buttonBeraber = document.querySelector('.beraber');


const p = document.querySelector('#result')    

let result = Number(p.value);

buttonAC.addEventListener('click', ()=>{
   return p.textContent=0;
  }
    )

    buttonMenfi.addEventListener('click', () => {
        // Get the current value from the display and apply the negative sign
        result = parseFloat(p.textContent) * -1;
        p.textContent = result;

    }

)




