//1부터 5까지 출력
let i = 1;
while(true){
    console.log(i);
    i++;
    if (i > 5) 
        break; // 반복문 종료
    
}   

let j=1;
let sum = 0;
while(true){
    sum += j; // sum = sum + j
    
    console.log(`j: ${j}, sum: ${sum}`);
    j++;
    if (j > 5)
        break; // 반복문 종료
}
console.log(`합계: ${sum}`);


