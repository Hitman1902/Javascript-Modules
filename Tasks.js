// Task1
// function factorial(n) {
//   if (n == 0 || n == 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
// console.log(factorial(5));

// Task 6
// const arr = [1, 2, 3, 4, 5, 6];
// for (let i=0;i<=arr.length;i++)
// {
//     for (let j=(i+1);j<=arr.length;j++)
//     {
//         if (arr[j]>arr[i])
//         {
//             temp=arr[j];
//             arr[j]=arr[i]
//             arr[i]=temp
//         }
//     }
// }
// console.log(arr)

// Task 9
// const strings = ["apple", "banana", "bat", "cat", "dog", "a"];
// // console.log(strings[0].length);
// // console.log(strings[0].length)
// for (let i = 0; i <= 6; i++) {
//   for (let j = i + 1; j < 6; j++) {
//     if (strings[j].length < strings[i].length) {
//       temp=strings[j];
//       strings[j]=strings[i];
//       strings[i]=temp
//     }

//   }
// }
// console.log(strings);

// Task 11
// const arr1 = [1, 2, 5];
// const arr2 = [3, 4, 6];
// const obj = { Name: "john", age: 20 };
// const arr3 = [...arr1, ...arr2];
// const arr = [...obj.Name];
// console.log(arr);
// for (let i = 0; i <= arr3.length; i++) {
//   for (let j = i + 1; j <= arr3.length; j++) {
//     if (arr3[j] < arr3[i]) {
//       temp = arr3[j];
//       arr3[j] = arr3[i];
//       arr3[i] = temp;
//     }
//   }
// }
// console.log(arr3);
const arr1 = [1, 2, 3, 8, 5, 6];
const arr2 = [3, 4, 5, 2];
let n = arr1.length;
let m = arr2.length;
let len = n + m;
const arr3 = [];
let i = 0;
let j = 0;
let k = 0;
while (i < len) {
  if (j >= n) {
    arr3.push(arr2[k]);
    k += 1;
    i += 1;
  }
  if (k == 0) {
    arr3.push(arr1[j]);
    j += 1;
    i += 1;
  }
}
console.log(arr3);

// Task 7
str = "hello";
// console.log(str[0])
// function Nonrepeatingchar(str) {
//   const charcount = {};
//   for (const char of str) {
//     charcount[char] = (charcount[char] || 0) + 1;
//   }
//   for (const char of str) {
//     if (charcount[char] === 1) {
//       return char;
//     }
//   }
//   return null;
// }
// console.log(Nonrepeatingchar(str));

// Task 8
// const arr = [1, 4, 5, 3, 9, 0, 8, 10, -1];
// function Targetvalue(arr, target) {
//   const result = [];
//   const unique = new Set();
//   arr.forEach((num, index) => {
//     arr.slice(index + 1).forEach((num2) => {
//       if (num + num2 == target) {
//         const sortedpair = [num, num2];
//         for (let i=0;i<=sortedpair.length;i++)
//         {
//             for (let j=(i+1);j<=sortedpair.length;j++)
//             {
//                 if (sortedpair[j]<sortedpair[i])
//                 {
//                     temp=sortedpair[j];
//                     sortedpair[j]=sortedpair[i];
//                     sortedpair[i]=temp;
//                 }
//             }
//         }
//         sortedpair.toString();
//         if (!unique.has(sortedpair)) {
//           result.push([num, num2]);
//           unique.add(sortedpair);
//         }
//       }
//     });
//   });
//   return result;
// }
// console.log(Targetvalue(arr, 9));

// // Task 10
// const input = [
//   { id: 1, name: "john", city: "New York" },
//   { id: 2, name: "Jane", city: "London" },
//   { id: 3, name: "Mike", city: "" },
//   { id: 4, name: "Value", city: "" },
// ];
// const result = {};
// input.forEach((value, index) => {
//   if (!result[value.city]) {
//     result[value.city] = [];
//   }
//   result[value.city].push(value);
// });
// console.log(result);
// Task 5
// dateSt = "Jun-3-1996";
// function DateString(dateSt) {
//   const [month, dayYear] = dateSt.split("-");
//   console.log(month,dayYear)
//   const [day, year] = dayYear.split(",");
//   const monthmap = {
//     Jan: "01",
//     Feb: "02",
//     Mar: "03",
//     Apr: "04",
//     May: "05",
//     Jun: "06",
//     Jul: "07",
//     Aug: "08",
//     Sept: "09",
//     Oct: "10",
//     Nov: "11",
//     Dec: "12",
//   };
//   return `${monthmap[month]} - ${day} - ${year}`;
// }
// console.log(DateString(dateSt));
