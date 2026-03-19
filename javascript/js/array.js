//배열생성
let fruits = ['사과', '배', '포도', '바나나'];

console.log(fruits);

//배열의 요소 접근
const result = document.getElementById("result");
result.innerHTML = "첫번째 과일 : " + fruits[0] 
result.innerHTML += "<br>두번째 과일 : " + fruits[1]
result.innerHTML += "<br>세번째 과일 : " + fruits[2]
result.innerHTML += "<br>네번째 과일 : " + fruits[3]    

//배열의 길이
result.innerHTML += `<br>과일의 총 개수 : ${fruits.length}`
result.innerHTML += "<br>"

//배열의 전체 요소 출력
for(let i=0; i<fruits.length; i++){
    result.innerHTML += `<br>과일 ${i+1} : ${fruits[i]}`
}
result.innerHTML += "<br>"

//배열의 요소 추가
fruits.push('오렌지');
for(let i=0; i<fruits.length; i++){
    result.innerHTML += `<br>과일 ${i+1} : ${fruits[i]}`
}
result.innerHTML += "<br>"

//배열의 요소 삭제
fruits.pop();    
for(let i=0; i<fruits.length; i++){
    result.innerHTML += `<br>과일 ${i+1} : ${fruits[i]}`
}       

//배열의 요소 변경
fruits[1] = '딸기';
result.innerHTML += "<br>"

for(let i=0; i<fruits.length; i++){
    result.innerHTML += `<br>과일 ${i+1} : ${fruits[i]}`
}
