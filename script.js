// Ascending Order

const number = [3, 2, 5, 4];
let Ascending = number.sort();
console.log(Ascending);

// Descending Order

const number1 = [3, 2, 5, 4];
let number2 = number1.reverse(); // reverse method
let Ascending1 = number.sort(function (a, b) {
  return b - a;
});
console.log(Ascending1);
console.log(number2);

// Sorting Student Details

const student = [
  { id: 2, name: "Gokul" },
  { id: 5, name: "Raj" },
  { id: 3, name: "Anbu" },
];
//Example 1 (Normal Ascending Order)
// student.sort(function (a, b) {
//   if (a.id < b.id) return -1;
//   if (a.id > b.id) return 1;
//   return 0;
// });
//Example 2 (UpperCase will Gives First Preference)
student.sort((a, b) => {
  NameA = a.name.toLowerCase();
  NameB = b.name.toLowerCase();
  if (NameA < NameB) return -1;
  if (NameA > NameB) return 1;
  return 0;
});
console.log(student);
