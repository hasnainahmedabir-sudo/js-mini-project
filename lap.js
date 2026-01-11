function leapYea(year){
    if (year%4 === 0){
        return true;
    }
    else{
        return false;
    }
}
const tipi = leapYea(2028);
console.log(tipi);