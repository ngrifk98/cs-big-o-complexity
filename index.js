//////////////////////
//// TIME & SPACE ////
//////////////////////

// 1) -------------------------------------------------------
let numbers = [0,1,2,3,4,5,6,7,8,9]

function printNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      console.log(numbers[i])
    }
  }
  
// Q: Given an array of numbers, what is the time complexity of this function?
// ANSWER:
/* The time complexity of this function is O(n), where 'n' is the number of elements in the numbers array. 
The function iterates through the entire array once, printing each element.
*/

// Q: What is the space complexity?
/* ANSWER: The space complexity of this function is O(1), as it only uses a fixed amount of additional 
memory (a single variable i) that does not depend on the input size.
*/



// 2) -------------------------------------------------------
// You are challenged to find the 4th element of an array, and you came up with this solution:

function findFourth(numbers) {
    var count = 1
    var answer = 0
  
    for (let i = 0; i < numbers.length; i++) {
        if (count === 4) {
            answer = numbers[i]
            return
        } else {
            count += 1
        }
    }
  }

// Q: What is the time complexity of of this solution?
/* ANSWER: The time complexity of this solution is O(n), where 'n' is the number of elements in the 
numbers array. The function iterates through the array in a linear fashion, looking for the fourth element.
*/

// Q: Given an array of numbers, what is the space complexity of this function?
/* ANSWER: The space complexity of this function is O(1), as it uses a fixed number of variables 
(count and answer) that do not depend on the input size. */


// Q: Could you come up with a solution that has a better time complexity? If so, write out that solution and note the time complexity. If not, why not?
/* ANSWER: Yes, we can improve the time complexity to O(1) by directly accessing the fourth 
element using array indexing. We don't need to loop through the array to find the fourth 
element. Here's my improved solution: */
function findFourth(numbers) {
  if (numbers.length >= 4) {
      return numbers[3]; // The fourth element (index 3)
  } else {
      return null; // Return null if the array doesn't have a fourth element
  }
}



// 3) -------------------------------------------------------
function printA() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
    }
}
// Q: What is the time complexity of this function?
/* ANSWER: The time complexity of this function is O(1) - constant time complexity. 
The function always prints five times, regardless of the input, because the loop 
iterates exactly five times (from 0 to 4). */


// Q: What is the space complexity of this function?
/* ANSWER: O(1) - constant space complexity. The function only uses a single variable i, 
which does not depend on the input size. */


// 4) -------------------------------------------------------
function printB(number) {
  for (let i = 0; i < number; i++) {
    console.log(i)
  }
}
// Q: What is the time complexity of this function?
// ANSWER: O(number), where 'number' is the value of the input parameter. 
// The function iterates 'number' times, printing each number from 0 to 'number-1'.


// Q: What is the space complexity of this function?
// ANSWER: O(1) - constant space complexity. The function only uses a single 
// variable i, which does not depend on the input size.



// 5) -------------------------------------------------------
function printC(num, arr) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(j)
    }
  }
}
// Q: What is the time complexity of this function?
/* ANSWER: O(num * arr.length), where 'num' is the first parameter and 'arr.length' 
is the length of the array passed as the second parameter. The function has nested loops, 
and for each iteration of the outer loop (num iterations), the inner loop iterates 
'arr.length' times. */


// Q: What is the space complexity of this function?
/* ANSWER: O(1) - constant space complexity. The function only 
uses a few variables (i and j) that don't depend on the input size. 
The console logs do not contribute to the space complexity. */


// 6) -------------------------------------------------------
function nested(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        console.log(j)
      }
    }
  }
// Q: What is the time complexity of this function?
// ANSWER: O(n^2) - Quadratic time complexity.

// Q: What is the space complexity of this function?
// ANSWER: O(1) - Constant space complexity.



// 7) -------------------------------------------------------
let numbers = [76,35,73,13,4,88,23,12,86,1,54,9,10,2]
// remember numbers could be reassigned, added to, etc.
let newNumbersA = numbers.filter((num) => {
  return num < 5
})
// Q: What is the time complexity of the filter higher-order function?
// ANSWER: O(n), where 'n' is the number of elements in the numbers array. 
// The filter function needs to examine each element in the array once.

// Q: What is the space complexity of the filter higher-order function?
/* ANSWER: O(m), where 'm' is the number of elements that satisfy the filter 
condition (i.e., the number of elements that are less than 5). The filter 
function creates a new array containing the filtered elements, and the space 
used is proportional to the number of elements that pass the filter. */


// 8) -------------------------------------------------------
// remember numbers (in #7) could be reassigned, added to, etc.
let newNumbersB = numbers.map((num) => {
  return num * 3
})
// Q: What is the time complexity of the map higher-order function?
// ANSWER: O(n), where 'n' is the number of elements in the numbers array. 
// The map function processes each element in the array once, performing 
// the transformation operation (multiplying each number by 3) on each element.

// Q: What is the space complexity of the map higher-order function?
// ANSWER: O(n), where 'n' is the number of elements in the numbers array. 
// The map function creates a new array with the same number of elements 
// as the original array, resulting in linear space complexity.





//////////////
//// TIME ////
//////////////

// 9) -------------------------------------------------------
function removeNum() {
    numbers.splice(3,1)
}
// Q: What is the time complexity of the function?
/* ANSWER: O(n), where 'n' is the number of elements in the numbers array. 
The splice function, in the worst case, needs to shift the elements after the 
removed element, and this operation takes O(n) time because it needs to 
reindex all elements after the removal point. */


// 10) -------------------------------------------------------
function insertNum() {
    numbers.splice(3, 0, 19)
}
// Q: What is the time complexity of the function?
/* ANSWER: O(n), where 'n' is the number of elements in the numbers array. The 
splice function inserts an element at a specific position in the array, and in 
the worst case, it needs to shift all the elements after the insertion point, 
resulting in a linear time complexity. */


// 11) -------------------------------------------------------
function pushNum() {
    numbers.push(25)
}
// Q: What is the time complexity of the function?
/* ANSWER:  O(1) - constant time complexity. The push function appends an 
element to the end of the numbers array, and its time complexity is constant 
because it doesn't depend on the size of the array. It performs a single 
operation regardless of how many elements are already in the array. */


// 12) -------------------------------------------------------
// Given an array of names....
function printFirstTwoNames(array) {
    console.log(array[0])
    console.log(array[1])
}

// Q: What is the time complexity of the function? 
/* ANSWER: O(1) - constant time complexity. The function always prints the 
first two elements of the array, regardless of the size of the array. 
The number of elements in the array doesn't affect the number of operations 
performed by the function, making it constant time complexity. */






///////////////
//// SPACE ////
///////////////

// 13) -------------------------------------------------------
// This function takes in parentArr which is an array of arrays
// It will only ever have 2 levels of arrays (the child arrays can't have array children)
// ex: [[1,2,3], ['a','b','c'], [5,null,'x',0]]
// NOT: [[1,2,3], ['a', ['an', 'invalid', '(grand)child', 'array], 'b', 'c'], [6,7,8,9,10]]
function arrInception(parentArr) {
    for (let i = 0; i < parentArr.length; i++) {
      let childArr = parentArr[i]
      for (let j = 0; j < childArr.length; j++) {
        console.log(`value at index ${j} in child arr (at ${i} in parent arr): ${childArr[j]}`)
      }
    }
  }

  // Q: What is the space complexity of this function?
  /* ANSWER: O(1) - constant space complexity. The function only uses a few variables 
  (i, childArr, j) that don't depend on the size of the parentArr. The console logs also 
  don't contribute to the space complexity because they are output operations and don't 
  use additional memory proportional to the size of the input. */
  
  
// 14) You are challenged to find the squared value of each number in an array. This is not the best solution, but it is what you come up with anyway...

function getNumbersSquared(numbers) {
  let numbers2 = [...numbers]

  let answers = []

  for (let i = 0; i < numbers.length; i++) {
    let squaredValue = numbers[i] * numbers2[i]
    answers.push(squaredValue)
  }
  return answers
}

// Q: What is the space complexity of this function?
/* ANSWER: O(n), where 'n' is the number of elements in the numbers array. 
The function creates two new arrays - numbers2 (using the spread operator) and answers. 
Both arrays have the same number of elements as the original numbers array, 
resulting in linear space complexity. */


// Q: Is it possible to improve this function's space complexity? If it is, write a new function below.
/* ANSWER: Yes, we can improve the space complexity to O(1) - constant space complexity, 
by avoiding the creation of additional arrays. We can directly modify the original numbers 
array, squaring each element in place. Here's my function below: */
function squareNumbersInPlace(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * numbers[i];
  }
}


// 15) Here are two functions that you came up with to count how many of each letter is in a given string and return an object with the individual counts: 

function countLetters(str) {
  let letters = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  }

  str = str.toLowerCase()
  const splitStr = str.split('')

  splitStr.forEach(char => {
    if (letters.hasOwnProperty(char)) {
      letters[char]++
    }
  })

return letters
}

/////////////////////////////

function countLettersRoundTwo(str) {
  // this contains a RegEx or Regular Expression, feel free to google
  str = str.toLowerCase().replace(/([^a-z])+/g,'')
  let letters = {}
  for (let i = 0; i < str.length; i++) {
    if (letters.hasOwnProperty(str[i])) {
      letters[str[i]]++
    } else {
      letters[str[i]] = 0
    }
  }
  return letters
}


// Q: Do these functions have the same space complexity?
// ANSWER: No.


// Q: What is the space complexity of each? 
// ANSWER - countLetters:
// ANSWER - countLettersRoundTwo:

/* countLetters: The space complexity of this function is O(1) - constant space complexity. 
The function uses a fixed-size object letters with 26 properties ('a' to 'z'), regardless of 
the input string's length. It also creates a few additional variables like str and splitStr, 
but the space used by these variables does not depend on the input size and remains constant. 

countLettersRoundTwo: The space complexity of this function is O(k), where 'k' is the number of 
unique lowercase characters present in the input string. The function creates an object letters 
with a number of properties equal to the number of unique lowercase characters in the input string. 
In the worst case, if all lowercase characters are present in the string, the object will have 
26 properties (from 'a' to 'z'). */


// Q: Explain how you came to your conclusions about the space complexity of each function. 
/* ANSWER: In countLetters, the function uses a fixed-size object letters with 26 properties to 
keep track of the count of each letter. It also creates a few additional variables, but their 
space usage does not depend on the input size. Thus, the space complexity is constant O(1).

In countLettersRoundTwo, the function creates an object letters to keep track of the count 
of each letter. The number of properties in the object depends on the unique lowercase 
characters present in the input string. In the worst case, all lowercase characters from 
'a' to 'z' are present, resulting in 26 properties. Therefore, the space complexity is 
proportional to the number of unique lowercase characters, making it O(k), where 'k' is 
the number of unique lowercase characters. */
