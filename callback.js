var array = [1,4,9];

var posArray = array.filter(function(element){
    return element > 0;
});
console.log(posArray);

var evenNum = array.filter(function(element) {
   return element % 2 == 0; 
});
console.log(evenNum);

var sqrNum = array.map(Math.sqrt);
console.log(sqrNum);

var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

var coldCity = cities.filter(function (element) {
    return element['temperature']< 70;
})
console.log(coldCity);

var cityNames = cities.map(function (element) {
    return element['name'];
})
console.log(cityNames);

var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

var greatJob = people.forEach(function (name) {
    console.log('Great job ' + name +'!');
})
greatJob;


var nameSort = people.sort();
console.log(nameSort);

var nameLengthSort = people.sort(function (a,b){
    return a.length - b.length;
})

console.log(nameLengthSort);

var arr = [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6]
];

var sumSort = arr.sort(function (a,b) { 
 return a.reduce(function(c,d){return c+d})  - b.reduce(function (e,f) {return e+f});
})
console.log(sumSort);

function call3Times(fun) {
  fun();
  fun();
  fun();
};

call3Times(function(){
    console.log('Hello, world!');
})

function callNTimes(num, fun){
    for(var i = 0; i< num; i++){
        fun();
    }
}
callNTimes(5, function(){
    console.log('Hello, world!');
});


var sumArr = array.reduce(function(a,b){
    return a+b;
});

console.log(sumArr);

var acro = people.reduce(function(a,b){
    return (a+b[0]) ;
}, "");

console.log(acro);

function cipher(text) {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  var result = '';
  var word = text.split('');
  word.forEach(function(letter) {
    var chr = letter;
    var idx = alphabet.indexOf(chr.toUpperCase());
    var newIdx = idx + 13;
    if (newIdx >= alphabet.length) {
      newIdx -= 26;
    }
    result += alphabet[newIdx];
  })
  return result;
}

// You can assume that the text is only one word, all letters are capitalized, and the offset is always 13
var encrypted = cipher('GENIUS');

console.log(encrypted);