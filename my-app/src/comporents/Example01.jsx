const Example01 = () => {

    // 조건부 렌더링
    const isLogined = true;

    return (  
        <div>        
            <h2>조건부 랜더링 예저</h2>  
            {/* 3항 연산자 사용 */}
            {isLogined ? <p>로그인 상태입니다.</p> : <p>로그아웃 상태입니다.</p>}         

            {/* && 연산자 사용 */}
            {isLogined && <p>로그인 상태입니다.</p>}
        </div>
    )

}   

export default Example01