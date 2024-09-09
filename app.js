let i = -1;
let count = 0;
let num = Number(prompt("3 reqemli eded yazin"));
while(num > 99 && num < 1000 && i+num < 999){
   i++;
   if((num + i) % num == 0){
      //console.log(num + i);
      count = count + (num + i);
   }
}
console.log(count);