// function inchToFoot(number){
//     const feet = number /12;
//     return feet;
// }
// const abir = inchToFoot(75);
// console.log(abir);

function inchToFoot(inch){
    const feet = inch /12;
    const feetNumber = parseInt(feet);
    const inchRemaining = inch % 12;
    const result = feetNumber + 'ft'+ inchRemaining + 'inch';
    return result;
}
const abirHeight=inchToFoot(67);
console.log(abirHeight);


// mile to km 
function mToK(mile){
    const km = mile * 1.61;
    return km;
}
const kilomeater = mToK(4);
console.log(kilomeater);