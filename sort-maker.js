function sortMaker(array){
    if(array.length==2){

        
        if(typeof array[0]=="number" && typeof array[1]=="number"){
            if(array[0]>0 && array[1]>0){

                if(array[0]>array[1]){
                    const newArray=[];
                    newArray.push(array[0]);
                    newArray.push(array[1]);
                    return newArray;
                }
                else if(array[0]<array[1]){
                    const newArray=[];
                    newArray.push(array[1]);
                    newArray.push(array[0]);
                    return newArray;
                }
                else{
                    return "equal"
                }
            }
            else{
                return "invalid array"
            }

        }
        else{
            return "invalid array"
        }
        
    }
    else if(array.length<2){
        return "array is to short"    
    }
    else{
        return "array is to long"
    }
}

const number=[1,4];

const result=sortMaker(number);
console.log(result);