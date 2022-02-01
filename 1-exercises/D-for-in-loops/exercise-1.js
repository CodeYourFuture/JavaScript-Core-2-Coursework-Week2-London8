/*

   Use a "for...in" loop to log out the name of
   each person who earns more than 50000. The
   log should include a "$" symbol before each salary.

*/

let salaries = {
  ross: 30000,
  monica: 55000,
  rachel: 90000,
};

// WRITE BELOW THIS LINE

for (const keys in salaries) {
  if (salaries[keys] > 50000) {
    console.log(salaries[keys]);
  }
}
// Expected Result:
// monica: $55000
// rachel: $90000
