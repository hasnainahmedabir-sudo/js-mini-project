const today = new Date();
console.log(today);

const date = new Date('2024-06-15');
console.log(date);

console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getDate());
const specificDate = new Date(2030 , 0 ,26)
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate.toLocaleString('en-GB'));

// unix epoc 