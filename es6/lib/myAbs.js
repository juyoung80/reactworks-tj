//myAbs.js 모듈
//절대값을 구하는 함수
const times3 = (x) => x * 3;

const myAbs = (x) => {
    if(x < 0) {
        return -x;               
    } else {
        return x;
    }
}

//모듈 내보내기
// export default myAbs; > 한개일때
export {myAbs, times3}; // > 여러개일 때