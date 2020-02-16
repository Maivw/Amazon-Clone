// Function constructor
// var john = {
//     name: "John",
//     yearOfBirth: 1990,
//     job: "teacher"
// };

// var Person = function (name,yearOfBirth, job) {
//     this.name = name;
//     this. yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function() {
//   console.log(2016 - this.yearOfBirth);
// };

// Person.prototype.lastName = "Smith";
// var John = new Person ("John", 1990, 'teacher');
// console.log(John);
// John.calculateAge();

// var Jane = new Person("Jane", 1969, "Desinger");
// console.log(Jane);

// var Mark = new Person("Mark", 1956, "retired");
// console.log(Mark);

// console.log(John.lastName);
// console.log(Jane.lastName);

/**---------------------------------------------*/

// //OBJECT.CREAT METHOD;
//  var personProto = {
//      calculateAge: function() {
//         console.log(2016 - this.yearOfBirth);
//      }
//  };

//  var john = Object.create(personProto);
//  john.name = "John";
//  john.yearOfBirth =  1990;
//  john.job = "teacher";

//  console.log(john);

//  var jane = Object.create(personProto, {
//      name: {value: "jane"},
//      yearOfBirth: {value: 1980},
//      job :{value: "designer"}
//  });

/**--------------------------------------------*/
//PRIMITIVES AND OBJECT

// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);

// var obj1 = {
//   name: "John",
//   age: 26
// };

// var obj2 = obj1;

// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);

/**--------------------------------------------*/
//FIRST CLASS FUNCTION: FUNCTION RETURNING A FUNCTION
// PAssing functions as arguments.
// var years = [1990, 1956, 1937, 2000, 1989];

// function arrayCalc(arr, fn) {
//     var arrRes = [];

//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));

//     }

//     return arrRes;
// }

// function calculateAge(el) {
//     return 2016 - el;
// }

// function isFullAge(el) {
//     return el >= 25;
// }
// var ages = (arrayCalc(years, calculateAge));
// console.log(ages);

// var fullAges = arrayCalc(ages, isFullAge);
// console.log(fullAges);

//Function returning functions

// function interviewQuestions(job) {
//     if (job === "designer") {
//         return function(name) {
//             console.log(name + ", can you please explain what UX design is?");
//         }
//     } else if (job === "teacher") {
//         return function(name) {
//             console.log('What subject do you teach, ' + name);
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + "what do you do?");
//         }
//     }
// }

// // var teacherQuestion = interviewQuestions('teacher');
// // teacherQuestion("Mai");
// interviewQuestions('designer')("Blue");
/**--------------------------------------------*/
/*IIFE*/
// function game() {
//   var score = Math.floor(Math.random() * 10);
//   console.log(score > 5);
// }
// game();

// (function() {
//   var score = Math.floor(Math.random() * 10);
//   console.log(score > 5);
// })();

// (function(goodluck) {
//   var score = Math.floor(Math.random() * 10);
//   console.log(score >= 5 - goodluck);
// })(6);

/**--------------------------------------------*/
// /*CLOSURE*/
// function retirement(retirementAge) {
//   var a = " year left until retirement";
//   return function(yearOfBirth) {
//     var age = 2016 - yearOfBirth;
//     console.log(retirementAge - age + a);
//   };
// }

// function test() {
//   var scope1 = "scope1";
//   console.log(scope1);
//   (function() {
//     console.log(scope1);
//     var scope2 = "scope2";
//     console.log(scope2);
//   })();
//   console.log(scope2);
// }
// test();

// var retirementUS = retirement(66);
// retirementUS(1990);
// retirement(66)(1990);
/**--------------------------------------------*/
// /*BIND, CALL, APPY*/

// function Question(question, answers, correct) {
//     this.question = question;
//     this.answers = answers;
//     this.correct = correct;
// }

// Question.prototype.displayQuestion() = function {
//   console.log(this.question);

//   for (var i = 0; i < this.answers.length; i++) {
//     console.log(i+ ':' + this.answers[i]);
//   }
// };
// var q1 = new Question ("Is JS the cooolest programming langague?", ['yes', 'No'], 0);


// var q2 = new Question("What is the name of this course? teacher", ['Jonas', 'Blue','Mike'], 1);


// var q3 = new Question("what does best describe coding", ['boring', 'interesting', 'difficult', 'tedious'], 2);
// var questions =[q1, q2, q3];
// var n = Math.floor(Math.random() * questions.length);
// questions[n];
/**--------------------------------------------*/
// /*ES5 AND ES6*/

// var name5 = "Jane Smith";
// var age5 = 23;

// name5 = "Jane Miller";
// console.log(name5);

// var i = 34;

// for (var i= 0; i < 4; i++) {
//   console.log(i);

// };

// console.log(i);

// let i = 34;
// for (let i = 0; i < 4; i++) {
//   console.log(i);
// }

// console.log(i);

/**--------------------------------------------*/
// /*blocks and IIFEs*/

// {
//   const a = 1;
//   let b = 2;
// }


/**--------------------------------------------*/
// const companies = [
//   { name: "Company One", category: "Finance", start: 1981, end: 2003 },
//   { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//   { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//   { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//   { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//   { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//   { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//   { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//   { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
// ];

// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach

// for (let i  = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// companies.forEach(function(company) {
//   console.log(company.name);
// })


//FILTER

//let canDrink = [];

// for (let i = 0; i < ages.length; i++) {
//   let age = ages[i];

//   if (age >= 21) {
//     canDrink.push(age);
//   }
// }

// console.log(canDrink);

// const canDrink = ages.filter(function(age) {
//   if (age >=21) {
//     return true;
//   }
// })
// console.log(canDrink);
/*filter the retail companies*/

// const retailCompanies = companies.filter(company => company.category === "Retail");

// console.log(retailCompanies);

/* GET 80S COMPANIES*/

// const eightyCompanies =  companies.filter(company => (company.start >= 1980 && company.start <= 1990));
// console.log(eightyCompanies)

/* GET COMPANIES LASTED FOR 10 YEARS*/
// const lasted10Years = companies.filter(company => (company.end - company.start) >= 10);

// console.log(lasted10Years);

/* MAp method*/
// Create array of company names

// const companyNames = companies.map(company => company.name);

// console.log(companyNames);


// let ageSum = 0;
// for (let i  =0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// console.log(ageSum);

// const ageSum = ages.reduce(function(acc, age) {
//   return acc += age}, 0);
// const ageSum =  ages.reduce((acc, age) => acc += age, 0);

// console.log(ageSum);


// const totalYears = companies.reduce((total, company) => total += (company.end - company.start), 0);

// console.log(totalYears);

// const combined = ages.map(age => age * 2).filter(age => age >= 40).sort((a, b )=> a - b).reduce((total, num) => (total += num), 0);

// console.log(combined);
hi mai how are you?
console.log("Hello");
console.log("Goodbye");
