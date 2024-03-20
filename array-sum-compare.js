function canPay(array,number){
let arrayTotal=0;

for(let i=0; i<array.length; i++){
    arrayTotal=arrayTotal+array[i];
}

if(arrayTotal>=number){
    return true;
}
else{
    return false;
}
    
}

const totalTaka=[2,5,2,5];
const totalCost=10;

const result=canPay(totalTaka,totalCost);
console.log(result);