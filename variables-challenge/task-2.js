/*
Create 2 variable to store first, middle & last name
Create a button => Get First Charactors
On click - get First charactors of all the variable and Join them with " - " and Print it in console
Ex. Sachin Ramesh Tendulkar => C-R-T
*/
let firstName = "Sachin";
let middleName = "Ramesh";
let lastName = "Tendulkar";
function getFirstCharacters() {
    let firstCharFirstName = firstName.charAt(0);
    let firstCharMiddleName = middleName.charAt(0);
    let firstCharLastName = lastName.charAt(0);
    let result = firstCharFirstName + " - " + firstCharMiddleName + " - " + firstCharLastName;
    console.log(result);
}
getFirstCharacters();