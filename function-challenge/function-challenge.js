/*Eligibility Checker
    Create textboxes for age, income, and credit score
    Use && and || operators to check loan eligibility:
    Age >= 21 AND Income >= 25000
    OR Credit Score >= 700
    Display: "Eligible for Loan" or "Not Eligible" in a strong tag */
let result = document.querySelector('#result');
let gradeResult = document.querySelector('#gradeResult')
function checkEligibility() {
  const age = +document.querySelector('#age').value;
  const income = +document.querySelector('#income').value;
  const creditScore = +document.querySelector('#credit-score').value;
  const result = document.querySelector('#result');

  result.style.display = "block";

  result.innerHTML =
    age >= 21 && (income >= 25000 || creditScore >= 700)
      ? "Eligible for Loan"
      : "Not Eligible for Loan";
}
/* Task - Grade Calculator
    Create textboxes for marks in 3 subjects
    Calculate average: (marks1 + marks2 + marks3) / 3
    Determine grade using operators:
    Average >= 90: A+
    Average >= 80: A
    Average >= 70: B
    Average >= 60: C
    Otherwise: F
    Display grade with color coding in a paragraph */
function calculateGrade() {
  const marks1 = +document.querySelector('#marks1').value;
  const marks2 = +document.querySelector('#marks2').value;
  const marks3 = +document.querySelector('#marks3').value;
  const average = (marks1 + marks2 + marks3) / 3;
  let grade;
  if (average >= 90) {
    grade = "A+";
  } else if (average >= 80) {
    grade = "A";
  } else if (average >= 70) {
    grade = "B";
  } else if (average >= 60) {
    grade = "C";
  } else {
    grade = "F";
  }
  gradeResult.style.display = "block";
  gradeResult.innerHTML = `Your grade is: <span style="color: ${getGradeColor(grade)};">${grade}</span>`;

}
function getGradeColor(grade) {
  if (grade === "A") return "green";
  if (grade === "B") return "blue";
  if (grade === "C") return "orange";
  if (grade === "D") return "purple";
  return "red"; // F or others
}
/*Create a function which has a parameter where we can send a word as parameter.
And converts the first letter of word into upper case and Return New String. */
function capitalizeFirstLetter(word) {
  if (word.length === 0) return word; // Handle empty string
  return word.charAt(0).toUpperCase() + word.slice(1);
}
console.log(capitalizeFirstLetter("hello")); // Output: "Hello"

/*Create a function which has a parameter and converts the first letter of each word into upper case and Return New String */
function capitalizeEachWord(sentence) {
  let word = sentence.split(" ");
  // console.log(word);
  for (let i = 0; i < word.length; i++) {
    word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
  }
  return word.join(" ");
}
console.log(capitalizeEachWord("mohammed suleman is learning javascript "));

/*Create a function which accept any no of parameter - it should return sum all parameeter.
Ex: testFun(1,3) output: 4, testFun(1,3,2,3) output: 9
*/
function sumAll(...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
console.log(sumAll(1, 3)); // Output: 4
console.log(sumAll(1, 3, 2, 3));
/*Create a function with a parameter which will tell you DataType of any parametr value you passed to the function
Ex: testFun("Chetan") output: string, testFun(12) output: number, testFun({}) output: object, testFun([]) output: array */
function getDataType(value){
  return typeof value;
}
console.log(getDataType("Chetan")); 
console.log(getDataType(12));

/*Create a function which have 2 parameter - write logic to check if both parameter has same value n if yes return true else return false
Ex: testFun("Chetan","Chetan") output: true, testFun(12,"12") output: false, testFun(12,12) output: true */
function checkSameValue(value1, value2){
  return value1 === value2;
}
console.log(checkSameValue("chetan","Chetan"));  
console.log(checkSameValue(12,"12"));
console.log(checkSameValue(12,12));
/*Create a function with parameter to check if value is number or not - return true or false
Ex: testFun("Chetan") output: false, testFun(12) output: true, testFun("33") output: true */
function isNumber(value){
  return typeof value === "number";
}
console.log(isNumber("Chetan"));
console.log(isNumber(12));
console.log(isNumber("33"));

/*Create a fun with 2 paramater which will check if both parameter in number the it will add num and return sum else return msg - "Number Not Found"
Ex: testFun("Chetan",23) output: "Number Not Found", testFun(12,12) output: 24*/
function addNumbers(value1, value2){
  if(typeof value1 === "number" && typeof value2 === "number"){
    return value1 + value2;
  }else{
    return "Number Not Found";
  }
}
console.log(addNumbers("Chetan",23));
console.log(addNumbers(12,12));

/*Create a function which has a parameter - if parameter has string data - create an array of words that we have in parameter to this function n return array of string else show alert as "NO String Found"
Ex: testFun("This is my Word") output : ["This","is","my","Word"]
Ex: testFun("Welcome to My Channel") output : ["Welcome","to","My","Channel"]
Ex: testFun(23123) output : "NO String Found" */
function  createArrayOfWords(value){
  if(typeof value === "string"){
    return value.split(" ");
  }else{
    return "NO String Found";
  }
}
console.log(createArrayOfWords("This is my Word"));
console.log(createArrayOfWords("Welcome to My Channel"));
console.log(createArrayOfWords(23123));

