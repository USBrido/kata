let repeatNumbers = function(data) {
let result = [];
for (let i = 0; i < data.length; i++) {
  multi = data[i][1];
  base = data[i][0];
  let total = [];
  for (let i = 1; i <= multi; i++) {
    total.push(base);
  }
  total = total.join("")
  result.push(total);
} 
return result.join(", ");
};


console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

