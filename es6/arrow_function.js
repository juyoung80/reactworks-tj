//함수선언
const add = (x, y) => {
    return x + y;
}

//함수선언이 한 줄로 표현될 때는 return과 {} 생략 가능
const message = () => console.log("good luck!")
const square = (x) => x * x;

//함수 호출
console.log(add(4, 5));
console.log(square(10));
message();
