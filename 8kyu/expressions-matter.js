// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)


// PREP
// P: 3 integers
// R:  the Maximum Obtained from every combination of a,b,c with [*+()]
// E: 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.


function expressionMatter(a, b, c) {
  //return the maximum value of all combinations
  return Math.max(
    a + b + c,
    a * b * c,
    a * (b + c),
    (a + b) * c,
    a + b * c,
    a * b + c,
  );
}