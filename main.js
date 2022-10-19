//Todavía estoy descubriendo cómo organizar TODO. Es caótico, lo sé,
//solo me queda encontrar un momento para colocar las cosas bien. Disculpa.

//Ejercicio 1.1:
//Para cambiarle los valores:
let myArray = ["January", "February", "Marj", "April", "Mei"];
myArray[2] = "March";
myArray[4] = "May";

console.log(myArray)
//Solución: ['January', 'February', 'March', 'April', 'May']

//Ejercicio 1.2
let myArrys = ["January", "February", "March", "April", "May"]
let newMonths = ["June", "July", "August", "September"]
let totalMonths = myArray.concat(newMonths)

console.log(totalMonths)

//Ejercicio 1.3
totalMonths.push("October", "November", "December")
console.log(totalMonths)



//Ejercicio 4

//a
function changeArray(num1, num2, num3) {
    let totalMonths = ["January", "February", "March", "April", "Mai", "June", "July", "August", "September","October", "November", "December"];
    if(num1 > num2){
    totalMonths.pop();
    return totalMonths 
    }
}
console.log(changeArray(10,5,3));

//b
function changeArray(num1, num2, num3) {
    totalMonths = ["January", "February", "March", "April", "Mai", "June", "July", "August", "September", "October", "November", "December"];
    if (num1 > num2) {
        totalMonths.pop();
        return totalMonths
    }
    else if ((num2 > num3) && (num2 < 10)) {
        totalMonths.shift();
        return totalMonths
    }
}
//changeArray(10,5,3);
console.log(changeArray(5, 7, 3));

//c
function changeArray(num1, num2, num3) {
            totalMonths = ["January", "February", "March", "April", "Mai", "June", "July", "August", "September", "October", "November", "December"];
            if (num1 > num2) {
                totalMonths.pop();
                return totalMonths
            }
            else if ((num2 > num3) && (num2 < 10)) {
                totalMonths.shift();
                return totalMonths
            }
            else if ((num2 > num3) || (num2 > num1)) {
                totalMonths.push("October");
                return totalMonths
            }
        }
        console.log(changeArray(5, 22, 3));

//d
function changeArray(num1, num2, num3) {
    totalMonths = ["January", "February", "March", "April", "Mai", "June", "July", "August", "September", "October", "November", "December"];
    if (num1 > num2) {
        totalMonths.pop();
        return totalMonths
    }
    else if ((num2 > num3) && (num2 < 10)) {
        totalMonths.shift();
        return totalMonths
    }
    else if ((num2 > num3) || (num2 > num1)) {
        totalMonths.push("October");
        return totalMonths
    }
    else{
        console.log("Bad Luck!")
    } 
}
console.log(changeArray(0, 0, 0));



//Ejercicio 3

//a
function week(){
    myArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return myArray.indexOf("Wednesday");
}
    console.log(week());
//Respuesta: 2

//b
function miercoles(){
    myArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    if (myArray[2].length > myArray.indexOf('Wednesday')){
    return myArray.reverse()
    }
}
console.log(miercoles())
