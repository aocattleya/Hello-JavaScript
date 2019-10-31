let list = ['Ruby', 'Ruby on Rails', 'JavaScript', 'HTML', 'CSS'];

console.log(list);
// ['Ruby', 'Ruby on Rails', 'JavaScript', 'HTML', 'CSS'];

console.log(list[2]);
// JavaScript

console.log(list.length);
// 5

list.push('GitHub');
console.log(list);
// ['Ruby', 'Ruby on Rails', 'JavaScript', 'HTML', 'CSS', 'GitHub']

list.pop();
console.log(list);
// ['Ruby', 'Ruby on Rails', 'JavaScript', 'HTML', 'CSS']

list.shift();
console.log(list);
// ['Ruby on Rails', 'JavaScript', 'HTML', 'CSS']