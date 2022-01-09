
/*1
function camelize(str){
let arrStr=str.split('-');// создали массив arrStr

for (let i = 1; i < arrStr.length; i++){
let letterArr=arrStr[i].split('');// разделили  эелемент - и создали из него массив 
letterArr[0] = letterArr[0].toUpperCase();// в верхний регистр первый элемент
let jointWord=letterArr.join('');//соединили элемент обратно
//alert (jointWord);
arrStr[i]=jointWord;//создали обратно массив уже с измененными элементами
}

//alert(letterArr[0])
//alert (letterArr)
//alert (jointWord)
return arrStr.join('');//соединили массив обратно
}
alert (camelize('list-style-image'))
*/
/*2
function  filterRange(arr, a, b){
    let arrAB=[];
    for (let i = 0; i < arr.length; i++){
        if (arr[i]>=a && arr[i]<=b){
            
            arrAB[i]=arr[i];
            //alert (arrAB[i])
        }
        else {
            console.log(arrAB)
        }
    }
    return arrAB;
}
let arr = [5, 3, 8, 0];
alert(filterRange(arr, 0, 5));
alert (arr)
*/
/*3
function  filterRange(arr, a, b){
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i]>=a && arr[i]<=b){
            
            delete arr[i];
        }  
        else {
            console.log(arr)
        }
    }
    return arr;
}
let arr = [5, 3, 8, 0];
alert(filterRange(arr, 1, 5));
alert (arr)
*/
/*4
let arr = [5, 2, 1, -10, 8];
arr.sort()
alert (arr)
let newArr=[];
for (let i = 0; i < arr.length; i++){
    
    newArr[i]=arr[(arr.length)-1-i];
    
}
alert(newArr);
alert.log(arr);
*/
/*5
let arr = ["HTML", "JavaScript", "CSS"];
let sorted= [];
for (let i = 0; i < arr.length; i++){
    sorted[i]=arr[i];
}

sorted.sort();
alert(sorted);
alert(arr);
*/
/*6
let number1=+prompt("Input number1");
let number2=+prompt("Input number2");
let operation = prompt("+,-,*,/,%");
let result=0;
if(operation=="+"){
    result = number1+number2;
}
else if (operation=="-"){
    result = number1-number2;
}
else if (operation=="*"){
    result = number1*number2;
}
else if (operation=="/"){
    result = number1/number2;
}
else if (operation=="%"){
    result = (number1/number2)*100;
}
alert (result);
*/

/*7
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ];
let names=[]
users.forEach(
    function f(element){
        
     console.log(element.name)
     names.push(element.name)
    })

alert (names)
*/
/*8
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let arr = [ vasya, petya, masha ];

function sortByAge(users){
    arr.sort(
        function compare(a,b){
        if (a.age>b.age){
        return 1; 
            }
        else {
            return -1;
            }
        }
    )
}

sortByAge(arr)
console.log(arr)
alert(arr[0].name); 
alert(arr[1].name); 
alert(arr[2].name); 
*/
/*9
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
let users = [ vasya, petya, masha ];
let ages=[]
function getAverageAge(users){
    users.forEach(
        function f(element){
            
        console.log(element.age)
        ages.push(element.age)
        })
    let sum=0;
    for (let i=0; i<ages.length; i++){
        sum=sum+ages[i];
    }
        let averAge=(sum/(ages.length))
        return averAge
}
//console.log(ages)
//console.log(sum)
//console.log(averAge)
alert (getAverageAge(users))
*/
/*11
let strings = ["кришна", "кришна", "харе", "харе",
 "харе", "харе", "кришна", "кришна", ":-O"
];

function unique(arr){
    let uniqueWords=[];

    for (let i=0; i<arr.length; i++){
        
        if(!uniqueWords.includes(arr[i])){
        uniqueWords.push(arr[i])
            }
        else {
        console.log ('already in array')
            }
        }
    return uniqueWords;
} 

alert(unique(strings));
*/
/*12
let map = new Map();
map.set("name", "John");
// let keys = map.keys();//возвращает итерируемый обьект по ключам
console.log(map.keys());

console.log(Array.from(map.keys()));// создали массив из обьекта
let keys =Array.from(map.keys());// записали его в переменную
console.log(keys);
keys.push("more")//теперь можем  применить метод .push 
console.log(keys);
*/
/*13
function makeCounter() {
    let count = 0;

    return function() {
    return count++;
    };
}
let counter = makeCounter();
let counter2 = makeCounter();
  // alert( counter() ); // 0
  // alert( counter() ); // 1
  // alert( counter2() ); // 0 - независимы
   //alert( counter2() ); // 1 
   */
   
  /*14 function Counter() {
    let count = 0;

    this.up = function() {
    return ++count;
    };

    this.down = function() {
    return --count;
    };
   }
   let counter = new Counter();
   alert( counter.up() ); // будет работать, 1
   alert( counter.up() ); // 2
   alert( counter.down() ); // 1
   */
   /*15
   function factorial(n){
   let result=1;
   if (n==1){
       result=n;
   }
   else{
       result=n*factorial(n-1)
   }
   return result;
}
alert(factorial(4))
*/