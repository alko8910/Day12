var contacts = [
  {
    "firstName": "John",
    "lastName": "Doe",
    "number": "12365495208",
    "likes": ["C", "C++", "C#"],
  },
  {
    "firstName": "Jane",
    "lastName": "Doe",
    "number": "4568295761",
    "likes": ["Python", "Swift", "R"],
  },
  {
    "firstName": "Richard",
    "lastName": "Roe",
    "number": "6938257149",
    "likes": ["React", "Angular", "Vue"],
  },
  {
    "firstName": "Jane",
    "lastName": "Roe",
    "number": "unknown",
    "likes": ["Javascript", "Node", "HTML & CSS"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  let ime = contacts.find(ime => ime.firstName === name);
 const descriptor1 = Object.getOwnPropertyDescriptor(ime, prop);
 return descriptor1.value;
  // Only change code above this line
}

console.log(lookUpProfile("John", "likes")); //Change this line
console.log(lookUpProfile("Jane", "lastName")); //Change this line
console.log(lookUpProfile("Richard", "likes")); //Change this line
//console.log(lookUpProfile("Rob", "number")); //Change this line
//console.log(lookUpProfile("Rob", "Javascript")); //Change this line
//console.log(lookUpProfile("Jane", "adress")); //Change this line
module.exports = lookUpProfile;
