/*Create A varible Store Current Date into it
now create a Formated Date by using value store in variable(Use Date Functions Refer W3School)
Year "/" Month "/" Day*/
let date = new Date()
let yearIs = date.getFullYear();
let monthIs = date.getMonth()+1;
let dateIs = date.getDate();

console.log(yearIs + "/" + monthIs + "/" + dateIs)