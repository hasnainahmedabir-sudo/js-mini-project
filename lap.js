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
//  leap year in different code
function isLeapYear2(year){
    if (year % 100 !==0 && year %4 === 0){
        return true;
    }
    else if (year %100 ===0 && year %400 ===0){
        return true;
    }
    else {return false};
}
// con;st lipi = isLeapYear2(2024)
console.log(isLeapYear2(2024));
