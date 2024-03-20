function cubeNumber(number){


if(typeof(number)==='number'){
    if(number>0){
        const cube=number*number*number;
        return cube;
    }
    else{
        const errorMessageNumber='Invalid number'
        return errorMessageNumber;
    }    

}
else{
    const errorMessageNotNumber='Invalid data type'
    return errorMessageNotNumber;
}

}

const result=cubeNumber(5);
console.log(result);