import styled from 'styled-components'

// 버튼 정의
const Button = styled.button`
    padding: 10px 20px;
    margin: 10px;
    font-size: 1rem;
    background-color: #007BFF;
    color: #f0f0f0;
    border: 2px solid #007BFF;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background-color: #fff;
        color: #007BFF;
        border: 2px solid #007BFF;
    }
`

// button 컴포넌트를 상속받아 RoundedButton 생성
// 상속의 형태 : styled(부모 컴포넌트)`스타일`
const RoundedButton = styled(Button)`
    border-radius: 50px;
`

const StyleButton = () => {
    return (
        <>
            <Button>Click Me</Button>
            <RoundedButton>Click Me</RoundedButton>
        </>
    
    )
}

export default StyleButton