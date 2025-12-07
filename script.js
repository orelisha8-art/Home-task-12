

const numbers = [9, 5, 6, 12, 7, 18, 20, 21];
const divisible = numbers.filter(function(num) {
    return num % 3 === 0;
});

if (divisible.length === 0) {
    console.log("the array is not divisible by 3");
} else {
    numbers.forEach(function(num, index){
        if (num % 3 ===0){
            console.log("Number " + num + " at index " + index + " is divisible by 3");
        }
    })
}



const letters = ['a', 'A', 'F', 'u', 'l', 'T'];

const result = letters.map(function(item){
 if (item === item.toUpperCase()) {
    return 'U';
} else {
    return 'L';
}
 });

 console.log(result);

 const letters2 = ['a', 'b', 'c', 'd', 'e', 'f'];

 const replacedArray = letters2.map(function(item, index){
    if (index % 2 ===0){
        return index;
    }else{
        return item;
    }
    }); 

    console.log(replacedArray);


    const ages = [10, 12, 15, 19, 21, 6];
    const over18 = ages.filter(function(num){
        return num >= 18;
    });
    console.log(over18);


    const numbers2 = [2, 4, 1, 2, 7, 2, 8];

const withOutIndex3 = numbers2.filter(function(num, index) {
  return index !== 3;
});

console.log(withOutIndex3); 

const names= ["Ariel", "Yonatan", "Nevo", "Yaron", "Itay"];
let moreNames  = [...names, "Avi", "Shalom"];

console.log(moreNames);


const Player = ["Cerem", "Yair", "Noam"];
const Coach = ["Or", "Ohad", "Adi"];

let CoachAndPlayer = [...Player, ...Coach, "Avshalom", "Netanel"];

console.log(CoachAndPlayer);


