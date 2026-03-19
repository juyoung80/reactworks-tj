// 비교 연산자
console.log(5 == 3); // false
console.log(5 != 3); // true
console.log(5 == '5'); // true
console.log(5 != '5'); // false
console.log(5 === 5); // true
console.log(5 === '5'); // false


// 논리 연산자
let a = 10;
console.log(a > 5 && a < 15);
console.log(a > 5 || a < 5);
console.log(!(a > 5));


// 조건 연산자
let age = 20;
let isAdult = (age >= 20) ? '성인' : '미성년자';


// 백틱을 이용한 리터링 문법 -  변수는 ${}로 감싸서 사용
console.log(`숫자:${age}, 결과 : ${isAdult}`);


