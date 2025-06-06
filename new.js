let input = prompt("Enter a number:")
//using ternary operator
input%5===0 ? console.log("it is multiple by 5"):console.log("it is not multiple by 5");
 
//FOr a given array with marks of students .Find the average marks of the entire class.
let marks = [85,97,44,37,76,60];
let total_marks=0;
for(let i=0;i<marks.length;i++){
    total_marks = total_marks+marks[i];
}
let average_marks = total_marks/marks.length;
console.log(average_marks);