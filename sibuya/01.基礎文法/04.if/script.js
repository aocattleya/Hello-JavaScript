let num = 60;

if (num % 15 == 0) {
  console.log(num + 'は3と5の倍数です');
} else if (num % 3 == 0) {
  console.log(num + 'は3の倍数です');
} else if (num % 5 == 0) {
  console.log(num + 'は5の倍数です');
} else {
  console.log(num + 'は3の倍数でも、5の倍数でもありません');
}