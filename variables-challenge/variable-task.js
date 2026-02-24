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
/*Create A varible Store Current Date into it
now create a Formated Date by using value store in variable(Use Date Functions Refer W3School)
Year "/" Month "/" Day*/
let date = new Date()
let yearIs = date.getFullYear();
let monthIs = date.getMonth()+1;
let dateIs = date.getDate();

console.log(yearIs + "/" + monthIs + "/" + dateIs)

/*Create 3 varibales to store ProductName, Price, discount
now Enter Some data into it. add some decimal values into price with 4-5 digits after decimal ex 23.54655
now create new String like - product Name is "ProdutName" Original price is "price" with Discount "dicount"% => new Final price will be "New Price"
calculate Final price by adding discount ro original Price*/
let ProductName = "Lifeboy";
let ProductPrice = 5500;
let discount = 0.05;
let ProductFinalPrice =ProductPrice*discount
console.log(ProductName + ':'  +ProductFinalPrice + "rs")
    const textArea = document.querySelector("#textArea");
    const searchInput = document.querySelector("#searchWord");
    const button = document.querySelector("#searchBtn");

    button.addEventListener("click", function () {
        const text = textArea.value.toLowerCase();
        const word = searchInput.value.toLowerCase();
        
        if (word && text.includes(word)) {
            alert("Word exists");
        } else {
            alert("Word not present");
        }
           });

           