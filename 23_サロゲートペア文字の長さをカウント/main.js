var text1 = '叱る';
var text2 = '𠮟る';
console.log(text1.length);  // 2
console.log(text2.length);  // 3

var msg = '𠮟る';
var len = msg.length;
var num = msg.split(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g).length - 1;
console.log(msg.length - num); // 2
