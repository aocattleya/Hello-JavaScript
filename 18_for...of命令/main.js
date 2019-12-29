let data = ["apple", "orange", "banana"];
for (let i = 0, len = data.length; i < len; i++) {
  console.log(data[i]);
}

for (let j = 0; j < data.length; j++) {
  console.log(data[j]);
}

// for...of
for (let value of data) {
  console.log(value);
}

// apple
// orange
// banana