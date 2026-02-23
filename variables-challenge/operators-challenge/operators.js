/*
 Create 2 variables store 2 numbers in it
  Create 4 varibale to store addition, substraction, multiplication, division
  show addition and substraction in Alert popup
  show multiplication and division in console
  */
let num1 = 20;
let num2 = 40;
let addingOfNumber = 20 + 40;
let substractionOfNumber = 20 - 40;
let multiplicationOfNumber = 20 * 40;
let divisionOfNumber = 20 / 40;
console.log(
  "Adding of Number is " +
    addingOfNumber +
    " and Substraction of Number is " +
    substractionOfNumber +
    "Division of Number is " +
    divisionOfNumber +
    " and Multiplication of Number is " +
    multiplicationOfNumber,
);

/*Task 2
store ProductPrice in a variable and Discount in another variable
now create one more variable to store calculate discounted Price into another variable
Discount will be in %
Show Discounted Product Price in Confirm Popup*/
let productPrice = 1000;
let discount = 20;
let discountedPrice = productPrice - (productPrice * discount) / 100;
console.log("Product Price is " + productPrice);
console.log("Discounted Price is " + discountedPrice);
console.log("Discounted Amount is " + (productPrice - discountedPrice));

/*
store 23 into variable and incremnt it by 5 times by using incremnt Operator print it in console
decremnt that value by 6 time and show updated value in alert popup
*/
let number = 23;
let anotherNumber = 25;
number++;
number++;
number++;
number++;
number++;
console.log(number);
anotherNumber--;
anotherNumber--;
anotherNumber--;
anotherNumber--;
anotherNumber--;
console.log(anotherNumber);

/*
store student names into 3 variable
store student states into other 3 variables
now check if student has same name and same state and print it in console
*/
let studentName1 = "Rahul";
let studentName2 = "shamoon";
let studentName3 = "suleman";
let studentState1 = "Delhi";
let studentState2 = "Mumbai";
let studentState3 = "Pune";
console.log(studentName1 === studentName2 && studentState1 === studentState2);

/*create 2 variable to store names of state
check if both states having same no of charactors (to get charactors legth you need use length property of string) */
let state1 = "Delhi";
let state2 = "Mumbai";
console.log(state1.length === state2.length);

/*create a boolean variable and store false value
now reverse value to true by using Not Operator
print value in console */
let booleanVariable = false;
console.log(!booleanVariable);
/*
Create 3 textboxes for entering three numbers
Create a button "Analyze Numbers"
Check if first > second > third (descending order)
Check if all three are equal
Check if they form an arithmetic progression
Display results using console.log with detailed messages
*/
let firstValue = document.querySelector(".num1");
let secondValue = document.querySelector(".num2");
let thirdValue = document.querySelector(".num3");
let btn = document.querySelector(".btn");
 function analyzeNumbers() {
    debugger
  let firstNumber = Number(firstValue.value);
  debugger
  let secondNumber = Number(secondValue.value);
  debugger
  let thirdNumber = Number(thirdValue.value);
  debugger
  if (firstNumber > secondNumber && secondNumber > thirdNumber) {
    console.log("Descending Order");
  } else {
    console.log("Not Descending Order");
    if (firstNumber === secondNumber && secondNumber === thirdNumber) {
      console.log("All Three are Equal");
    } else {
      console.log("Not Equal");
    }
    if (firstNumber - secondNumber === secondNumber - thirdNumber) {
      console.log("Arithmetic Progression");
    } else {
      console.log("Not Arithmetic Progression");
    }
  }
};
