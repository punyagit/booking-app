let fs = require('fs');

let data = JSON.parse(fs.readFileSync('mynewfile3.json', 'utf8'));
console.log(data);
// var myJSON = [{ name: 'John', age: 31, city: 'New York' }];
// fs.writeFile('mynewfile3.json', JSON.stringify(myJSON), function(err) {
//   if (err) throw err;
//   console.log('Saved!');
// });
