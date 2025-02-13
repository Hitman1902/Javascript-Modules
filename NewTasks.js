// // Input :
// // [ "a.b.c": 23, "a.b.d.f": 56, "a.s" : "Hello" ]

// // Ouput :
// // {
// // "a" : {
// //    "b" : {
// // 	"c" : 23
// // 	}
// //  }
// // }
// // const obj={"a.b.c":23}
// // const ex={}
// // const value=obj['a.b.c']
// // console.log(value)
// // console.log(obj.key)
// const input = [{ "agh.brte.cddd.dog.e.fff": 23 }];
// const ex = {};
// const result = [];
// const h = [];
// // const ki=input[0]
// // console.log("Key is ",ki)
// // const value12=input[0]['a.b.c']
// // console.log(value12)
// input.forEach((key, value) => {
//   // console.log(key)
//   for (let c in key) {
//     // console.log(c)
//     result.push(c);
//   }
//   console.log(result);
//   const v = input[0][result];
//   console.log("Value is ", v);
//   const str = result.toString();
//   console.log(str);
//   const h = str.split(".");
//   console.log(h);
//   let ans = ex;

//   for (let i = 0; i < h.length; i++) {
//     if (i == h.length - 1) {
//       ans[h[i]] = v;
//       //   ex[h[i]] = v;
//     } else {
//       ans[h[i]] = {};
//       ans = ans[h[i]];
//       //   ex[h[i]] = {};
//       //   ex = ex[h[i]];
//       console.log("Ex for first: ", ex);
//       console.log("Ans for first : ", ans);
//     }
//   }
//   console.log("Print ", ans);
//   // for (let i=1;i<h.length;i++)
//   // {
//   //     ex[h[0]][h[i]]={}
//   // }
//   console.log(JSON.stringify(ex, 0, 2));
//   // for (const char of str)
//   // {
//   //     ex[char]={}
//   // }
//   // console.log(ex)
//   // console.log(result)
// });

// // As for the logic it would be like
// // first if the dot is compulsory then first of all i will take the key of the dictionary and convert into the array and then convert the array into the string
// // and split the string by '.' so each character will only remain
// // after that i have already declare the empty json object in which i will loop in each character and take the character as the key of that json object
// // after which i will put that key values as the next character but how in code that's the question

// const data = [
//   {
//     2023: {
//       Lenovo: { processor: "i5", count: 46 },
//       Hp: { processor: "i5", count: 18 },
//       Mac: { processor: "i5", count: 78 },
//     },
//     month: 1,
//   },
//   {
//     2023: {
//       Lenovo: { processor: "i5", count: 46 },
//       Hp: { processor: "i5", count: 18 },
//       Mac: { processor: "i5", count: 78 },
//     },
//     month: 2,
//   },
//   {
//     2023: {
//       Lenovo: { processor: "i5", count: 46 },
//       Hp: { processor: "i5", count: 18 },
//       Mac: { processor: "i5", count: 78 },
//     },
//     month: 3,
//   },
//   {
//     2023: {
//       Lenovo: { processor: "i5", count: 46 },
//       Hp: { processor: "i5", count: 18 },
//       Mac: { processor: "i5", count: 78 },
//     },
//     month: 4,
//   },
//   {
//     2023: {
//       Lenovo: { processor: "i5", count: 46 },
//       Hp: { processor: "i5", count: 18 },
//       Mac: { processor: "i5", count: 78 },
//     },
//     month: 5,
//   },
//   {
//     2023: {
//       Lenovo: { processor: "i5", count: 46 },
//       Hp: { processor: "i5", count: 18 },
//       Mac: { processor: "i5", count: 78 },
//     },
//     month: 6,
//   },
//   {
//     2023: {
//       Lenovo: { processor: "i5", count: 46 },
//       Hp: { processor: "i5", count: 18 },
//       Mac: { processor: "i5", count: 78 },
//     },
//     month: 7,
//   },
//   {
//     2023: {
//       Lenovo: { processor: "i5", count: 46 },
//       Hp: { processor: "i5", count: 18 },
//       Mac: { processor: "i5", count: 78 },
//     },
//     month: 8,
//   },
//   {
//     2023: {
//       Lenovo: { processor: "i5", count: 46 },
//       Hp: { processor: "i5", count: 18 },
//       Mac: { processor: "i5", count: 78 },
//     },
//     month: 9,
//   },
//   {
//     2023: {
//       Lenovo: { processor: "i5", count: 46 },
//       Hp: { processor: "i5", count: 18 },
//       Mac: { processor: "i5", count: 78 },
//     },
//     month: 10,
//   },
//   {
//     2023: {
//       Lenovo: { processor: "i5", count: 46 },
//       Hp: { processor: "i5", count: 18 },
//       Mac: { processor: "i5", count: 78 },
//     },
//     month: 11,
//   },
//   {
//     2023: {
//       Lenovo: { processor: "i5", count: 46 },
//       Hp: { processor: "i5", count: 18 },
//       Mac: { processor: "i5", count: 78 },
//     },
//     month: 12,
//   },
//   {
//     2024: {
//       Lenovo: { processor: "i5", count: 46 },
//       Hp: { processor: "i5", count: 18 },
//       Mac: { processor: "i5", count: 78 },
//     },
//     month: 1,
//   },
//   {
//     2024: {
//       Lenovo: { processor: "i5", count: 46 },
//       Hp: { processor: "i5", count: 18 },
//       Mac: { processor: "i5", count: 78 },
//     },
//     month: 2,
//   },
//   {
//     2024: {
//       Lenovo: { processor: "i5", count: 46 },
//       Hp: { processor: "i5", count: 18 },
//       Mac: { processor: "i5", count: 78 },
//     },
//     month: 3,
//   },
//   {
//     2024: {
//       Lenovo: { processor: "i5", count: 46 },
//       Hp: { processor: "i5", count: 18 },
//       Mac: { processor: "i5", count: 78 },
//     },
//     month: 4,
//   },
//   {
//     2024: {
//       Lenovo: { processor: "i5", count: 46 },
//       Hp: { processor: "i5", count: 18 },
//       Mac: { processor: "i5", count: 78 },
//     },
//     month: 5,
//   },
//   {
//     2024: {
//       Lenovo: { processor: "i5", count: 46 },
//       Hp: { processor: "i5", count: 18 },
//       Mac: { processor: "i5", count: 78 },
//     },
//     month: 6,
//   },
//   {
//     2024: {
//       Lenovo: { processor: "i5", count: 46 },
//       Hp: { processor: "i5", count: 18 },
//       Mac: { processor: "i5", count: 78 },
//     },
//     month: 7,
//   },
//   {
//     2024: {
//       Lenovo: { processor: "i5", count: 46 },
//       Hp: { processor: "i5", count: 18 },
//       Mac: { processor: "i5", count: 78 },
//     },
//     month: 8,
//   },
//   {
//     2024: {
//       Lenovo: { processor: "i5", count: 46 },
//       Hp: { processor: "i5", count: 18 },
//       Mac: { processor: "i5", count: 78 },
//     },
//     month: 9,
//   },
//   {
//     2024: {
//       Lenovo: { processor: "i5", count: 46 },
//       Hp: { processor: "i5", count: 18 },
//       Mac: { processor: "i5", count: 78 },
//     },
//     month: 10,
//   },
//   {
//     2024: {
//       Lenovo: { processor: "i5", count: 46 },
//       Hp: { processor: "i5", count: 18 },
//       Mac: { processor: "i5", count: 78 },
//     },
//     month: 11,
//   },
//   {
//     2025: {
//       Lenovo: { processor: "i5", count: 46 },
//       Hp: { processor: "i5", count: 18 },
//       Mac: { processor: "i5", count: 78 },
//     },
//     month: 12,
//   },
//   {
//     2025: {
//       Lenovo: { processor: "i5", count: 46 },
//       Hp: { processor: "i5", count: 18 },
//       Mac: { processor: "i5", count: 78 },
//     },
//     month: 12,
//   },
//   {
//     2025: {
//       Lenovo: { processor: "i5", count: 46 },
//       Hp: { processor: "i5", count: 18 },
//       Mac: { processor: "i5", count: 78 },
//       Del: { processor: "i5", count: 60 },
//     },
//     month: 12,
//   },
// ];

// Output - {
//   "Year": 2023,
//   "Total_month": Total Month,
//   "Lenovo": Total Quantity,
//   "Hp": Total Quantity,
//   "Mac": Total Quantity
// }

// const month = data.length;
// const unique = new Set();
// const result = [];
// // const r = {};
// let length = 0;
// // let dataLength=data.length
// let year = 0;
// let lena = 0;
// let macc = 0;
// let pcc = 0;
// let ans = [];
// let r = {};
// let r1 = {};
// const s = new Set();
// console.log(month)
// const example = [];
// data.forEach((key, index) => {
//   for (const c in key) {
//     example.push(c);
//   }
//   year = example[0];
//   for (const j in data[index][year]) {
//     if (!unique.has(j)) {
//       result.push(j);
//       unique.add(j);
//     }
//   }
//   r = { Year: year, Month: month };
//   for (let j = 0; j < data.length; j++) {
//     for (let i = 0; i < result.length; i++) {
//       // r[result[i]]=0
//       r[result[i]] = (r[result[i]] || 0) + data[j][year][result[i]]["count"];
//     }
//   }
//   // console.log("Unique",unique)
// });

// console.log(r);
// console.log(result)
// console.log(unique)
// console.log(r)
// console.log(unique);
// const r={"Year":year,"Total_month":month,'Lenovo':lena,'Hp':pcc,'Mac':macc}
// console.log(r)
// console.log(data[0][2023]['Lenovo']["count"]);
// const example = [];
// month1 = 12;
// month2 = 12;
// let year1 = 0;
// let year2 = 0;
// let result1 = [];
// const unqiue2 = new Set();
// const un = new Set();
// let alpha = 0;
// data.forEach((key, index) => {
//   for (const c in key) {
//     if (!unique.has(c)) {
//       example.push(c);
//       unique.add(c);
//     }
//   }
//   year1 = example[0];
//   year2 = example[2];
//   for (const i in data[index][year1]) {
//     if (!un.has(i)) {
//       result1.push(i);
//       un.add(i);
//     }
//   }
//   for (const j in data[index][year2]) {
//     if (!un.has(j)) {
//       result1.add(j);
//       un.add(j);
//     }
//   }
//   console.log(result1)
//   r = { "year": year1, "Month": month1 };
//   r1 = { "year": year2, "Month": month2 };
//   // console.log("Result 1 ",data[0][2023]['Lenovo']['count'])
//   for (let i = 0; i < 12; i++) {
//     for (let k = 0; k < result1.length; k++) {
//       console.log(result1[k])
//       r[result1[k]] = (r[result1[k]] || 0) + data[i][year1][result1[k]]['count'];
//     }
//   }
//   for (let i = 0; i < 12; i++) {
//     for (let j = 0; j < result1.length; j++) {
//       r1[result1[j]] = (r1[result1[j]] || 0) + data[i][year2][result1[j]]["count"];
//     }
//   }
// });
// console.log(r1);
// console.log(r);
// result1.push(r);
// result1.push(r1);
// console.log(result1);
// console.log(alpha)
// console.log(r)
// console.log(example,unique)
// console.log(result1)

// let ex = {};
// let year = 0;
// let monthexist = false;
// const result = [];
// const unique = new Set();
// for (let i = 0; i < data.length; i++) {
//   let record = data[i];
//   for (const key in record) {
//     if (key !== "month") {
//       year = key;
//       monthexist = true;
//       break;
//     }
//   }
//   if (!ex[year]) {
//     ex[year] = { year: year, TotalMonth: 0 };
//   } // result.push(ex)
//   if (monthexist) {
//     ex[year].TotalMonth++;
//     // console.log(ex[year].Total)
//   }
//   const a = record[year];
//   // console.log(a)
//   for (const i in a) {
//     ex[year][i] = (ex[year][i] || 0) + a[i].count;
//   }
//   for (const i in ex) {
//     if (!unique.has(ex[i])) {
//       result.push(ex[i]);
//       unique.add(ex[i]);
//     }
//   }
// }
// // result.push(ex)
// console.log(result)
// for (const i in ex)
// {
//   if(ex[i] in result)
//   {
//     continue
//   }
//   else{
//     result.push(ex[i])
//   }
// }
// console.log(ex);
// console.log(result);
// console.log(result)
// console.log(ex)

// const input = {
//   user: {
//     name: "Alice",
//     address: {
//       city: "New York",
//       zip: 10001,
//     },
//     check: [
//       {
//         xxxxx: 0,
//       },
//       {
//         ggg: [
//           {
//             key1: [
//               {
//                 123: "lllll",
//                 ttt: 888,
//                 kkk: [
//                   {
//                     hello: 1200,
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   orders: [
//     { id: 1, item: "Laptop" },
//     { id: 2, item: "Phone" },
//     {
//       newKey: [
//         {
//           j: "hello",
//         },
//       ],
//     },
//   ],
//   ordrs2: {
//     key1: 66,
//   },
// };
// output - {
//   "user.name": "Alice",
//   "user.address.city": "New York",
//   "user.address.zip": 10001,
//   "orders.0.id": 1,
//   "orders.0.item": "Laptop",
//   "orders.1.id": 2,
//   "orders.1.item": "Phone"
// }
// const output = {};
// let keys = [];
// let k = " ";

// function F(input, k, keys) {
//   for (const i in input) {
//     if (typeof input[i] == "object") {
//       F(input[i], k + i + ".", keys);
//     } else {
//       keys[k + i] = input[i];
//     }
//   }
//   return keys;
// }
// console.log(F(input, k, keys));
// for (const i in input) {
//   // console.log(i)
//   let k = "";
//   // k += i;
//   keys.push(i);
//   for (let i = 0; i < keys.length; i++) {
//     for (const j in input[keys[i]]) {
//       k = keys[i];
//       k += "." + j;
//       temp = input[keys[i]];
//       if (typeof temp[j] == "object") {
//         for (const a in temp[j]) {
//           k += "." + a;
//           output[k] = temp[j][a];
//           console.log("Print");
//         }
//       } else {
//         output[k] = temp[j];
//       }
//     }
//     // console.log(k)
//   }
// }
// console.log(output);
// console.log(k)

// const users = {
//   Alice: ["Bob", "Charlie"],
//   Bob: ["Alice", "David"],
//   Charlie: ["Alice", "Eve"],
//   David: ["Bob"],
//   Eve: ["Charlie"],
// };
// const name = "Alice";
// // console.log(suggestFriends(users, "Alice"));
// // Output: ["David", "Eve"] (since they are friends of Bob/Charlie but not Alice)
// function suggestFriends(users, name) {
//   const output = [];
//   for (const key in users) {
//     if (name == key) {
//       continue;
//     }
//     if (name in users[key]) {
//       continue
//     } else {
//       output.push(key);
//     }
//   }
//   return output;
// }
// console.log(suggestFriends(users, n='Alice'));

