const khadok = ['abul', 'babul', 'kabul','abul','babul'];
const number = [1,2,3,2,3,3,4,5];

function noDuplicate(arr){
const unique =[];
for(const item of arr){
    if (unique.includes(item) === false){
        unique.push(item);
}
}
return unique;
}
const uniquearrey = noDuplicate(khadok);
const uniquearrey2 = noDuplicate(number);
console.log(uniquearrey);
console.log(uniquearrey2);

// kono duplicate na thakar arrey banano hoyeche.