// ---task 1---
let km = prompt("enter km: ");
function kmToMile(km) {
    console.log("miles: ", km * 0.621371);
}

kmToMile(km)

// ---task 2---
let num1 = prompt("enter num1: ");
let num2 = prompt("enter num2: ");
function calc(num1, num2) {
    let convert1 = +num1;
    let convert2 = +num2;
    if (!isNaN(convert1) && !isNaN(convert2)) {
        console.log(num1, " + ", num2, " = ", convert1 + convert2);
        console.log(num1, " - ", num2, " = ", convert1 - convert2);
        console.log(num1, " * ", num2, " = ", convert1 * convert2);
        console.log(num1, " / ", num2, " = ", convert1 / convert2);
    }
    else {
        return null
    }
}

calc(num1, num2);

// ---task 3---
let age = prompt("enter age: ");

function whoAreYou(age) {
    let youAge = +age;
    if (!isNaN(youAge)) {
        if (youAge >= 0 && youAge < 12) {
            console.log("ти дитина");
        }
        else if (youAge >= 12 && youAge < 18) {
            console.log("ти підліток");
        }
        else if (youAge >= 18 && youAge < 60) {
            console.log("ти дорослий");
        }
        else if (youAge >= 60) {
            console.log("ти пенсіонер");
        }
    }
    else {
        return null
    }
}

whoAreYou(age);