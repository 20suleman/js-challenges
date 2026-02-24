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