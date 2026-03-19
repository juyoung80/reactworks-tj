//배열 구조 분해 할당
let arr = [1, 2]
// arr[0] = 1
// arr[1] = 2

const [a, b] = arr;
console.log(a, b);


//객체 구조 분해 할당
//자바스크립트 객체 > json 변경
const product = {
    product_name : '무선마우스',
    price : 27000
}

// 구조 분해 할당
const {product_name, price} = product;
console.log(`제품명 : ${product_name}, 가격 : ${price}원`);