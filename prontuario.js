// prompt-sync
// npm install prompt-sync 

//Prontuário Médico

const prompt = require('prompt-sync') (); 


const userName = prompt ('Type your name: '); 
const userAge = prompt ('Type your age: ');
const userWeight = prompt  ('Type your Weight: ');
const userAdmission = prompt  ('Type your date od admission: ');
const userHeight = prompt  ('Type your height: ');
const userDiabetes = prompt   ('Do you have Diabetes? (yes or not)  ') 



console.log(`The Typed name was: ${userName}`)
console.log(`The Typed age was: ${userAge}`)
console.log(`The Typed Weight was: ${userWeight}`)
console.log(`The Typed Admission date was: ${userAdmission}`)
console.log(`The Typed Height was: ${userHeight}`)
console.log(`Does the patient have Diabetes? ${userDiabetes}`)

