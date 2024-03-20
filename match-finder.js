function matchFinder(string1,string2){

    if(typeof string1=="string"&& typeof(string2)=="string"){
        if(string1.includes(string2)){
            return true;
        }
        else{
            return false;
        }

    }
    else{
        return "invalid input";
    }

}
 const string ="my name is fahim";
 const subString=9;

 const result=matchFinder(string,subString);
 console.log(result);

