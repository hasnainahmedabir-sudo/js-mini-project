function oddAvg(numbers){
   let sum = 0;
 for(const number of numbers){
   //  console.log(number);
    if(number % 2 !== 0 ){
      console.log('odd number',number);
      sum = sum + number;
      
    }
 }
 console.log('jogfol',sum);
 const count = numbers.length;
 const avg = sum / count;
 return avg;
}
const numbers = [ 42,43,44,45,46,47];
const avg = oddAvg(numbers);
console.log(avg);
