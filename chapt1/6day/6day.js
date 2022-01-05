let ary = ["6", "10", "2", "5"];
let ary2 = [];
let sum = 0;

const btn = document.querySelector("#btn");

const rabbit = document.querySelector(".rabbit");

btn.addEventListener("click", (e)=> {
    rabbit.scrollIntoView({behavior: 'smooth'}); 

    aryVal = ary;
    console.log(aryVal);
    shuffle(ary);

    console.log(aryVal);
    console.log(ary);
});



function shuffle(array) { 
    array.sort(() => Math.random() - 0.5); 
}

function sonyoul(array) {
    let sumNum = 0;
    let mulNum = 0;
    for(let maxNum = array.length; maxNum >=1; maxNum--) {
        if(maxNum != 1) {
            sumNum = maxNum - 1;

            mulNum = sumNum 
        }
    } 
}


for(let i = 0; i < ary.length * (ary.length -1); i++) {
    let a = ary[0] + ary[1] +ary[2];

    shuffle(ary);

    let b = ary[0] + ary[1] +ary[2];

    if(Number(a) == Number(b)) {
        i--;
        continue;
    } else {
        ary2.push(Number(a));
    }
}

console.log(ary2);

console.log(Math.max.apply(null, ary2));