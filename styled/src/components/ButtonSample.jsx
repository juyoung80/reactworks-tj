import styled from 'styled-components'

//버튼 스타일 정의
const Button = styled.button`
    margin:10px;
    padding: 8px 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 500;

    //props를 이용하여 스타일을 동적으로 변경
    color: ${props => props.color || 'black'};
    background-color: ${props => props.backgroundColor || 'white'};

    //primary props가 true일 때 보라색 배경과 흰색 글자 적용
    ${p => p.primary && `
        color: white;
        background-color: purple;        
    `}


`


const ButtonSample = () => {
    return (
        <>
            <Button>기본 버튼</Button>
            <Button color="green" backgroundColor="yellow">
                녹색 버튼
            </Button>
            <Button primary>보라 버튼</Button>
        </>
    )
}

export default ButtonSample
