import { useEffect, useRef } from "react"

function InputFocus() {

    const inputRef = useRef(null);
    console.log(inputRef);

    //컴포넌트 마운트 된 후 input 요소에 포커스가 설정됨
    useEffect(() => {
        console.log(inputRef);
        inputRef.current.focus();

    } , [])

    //입력값 전송 핸들러
    const handleSubmit = () => {
        alert(`환영합니다. ${inputRef.current.value}님`);

        inputRef.current.focus(); // 포커스 재설정
        inputRef.current.value = ""; //입력필드값 초기화
    }

    return(
        <div>
            <input 
                type="text" 
                ref={inputRef}
                placeholder="이름을 입력하세요"    
            />
            <button onClick={handleSubmit}>전송</button>
        </div>
    )
}

export default InputFocus