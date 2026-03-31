
//동기처리
function displayA(){
    console.log('A');

}

function displayB(){
    //console.log('B');
    setTimeout(() => {
        console.log('B');
    }, 2000) //2초후에 노출
}

function displayC(){
    console.log('C');
}

displayA()
displayB()
displayC()