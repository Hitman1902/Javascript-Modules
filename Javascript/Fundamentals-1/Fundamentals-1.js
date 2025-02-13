//Task-1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. StoreMark'sandJohn'smassandheightinvariables
// 2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
// versions)
// 3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

let markWeight=78
let johnWeight=92
let markHeight=1.69
let johnHeight=1.95
let markHigherBMI=false
const markBMI=markWeight/(markHeight**2)
const johnBMI=johnWeight/(johnHeight**2)
if(markBMI>johnBMI)
{
    markHigherBMI=true
}
console.log(markBMI,johnBMI)

//Task-2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Printaniceoutputtotheconsole,sayingwhohasthehigherBMI.Themessage is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉

// let markWeight=78
// let johnWeight=92
// let markHeight=1.69
// let johnHeight=1.95
// let markHigherBMI=false
// const markBMI=markWeight/(markHeight**2)
// const johnBMI=johnWeight/(johnHeight**2)
// if(markBMI>johnBMI)
// {
//     markHigherBMI=true
//     console.log(`Marks's BMI ${(markBMI)} is higher than johns ${(johnBMI)}`)
// }

// Task-3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculatetheaveragescoreforeachteam,usingthetestdatabelow
// 2. Comparetheteam'saveragescorestodeterminethewinnerofthecompetition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus1:Includearequirementforaminimumscoreof100.Withthisrule,a
// team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. Bonus2:Minimumscorealsoappliestoadraw!Soadrawonlyhappenswhen both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// let dolphinsScore1=96
// let dolphinsScore2=108
// let dolphinsScore3=89
// let koalasScore1=109
// let koalasScore2=95
// let koalasScore3=123
// let dolphinsAverage=dolphinsScore1+dolphinsScore2+dolphinsScore3
// let koalasAverage=koalasScore1+koalasScore2+koalasScore3
// if (dolphinsAverage>koalasAverage)
// {
//     console.log('Dolphins Wins')
// }
// else if (dolphinsAverage==koalasAverage)
// {
//     console.log('Tie')
// }
// else{
//     console.log('Koalas Wins')
// }

// Task-4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculatethetip,dependingonthebillvalue.Createavariablecalled'tip'for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Printastringtotheconsolecontainingthebillvalue,thetip,andthefinalvalue (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430 Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's>= 50 && <= 300😉

// let bill=275
// let tip=0
// let total=0
// const result=(50<=bill<=300)? tip=(0.15*bill): tip=(0.2*bill)
// total=bill+result
// console.log(`Bill is ${bill} tip is ${result} total is ${total}`)

