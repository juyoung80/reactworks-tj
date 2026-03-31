import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh; //vh(viewport height) : 화면의 높이의 100%를 의미
`

const Title = styled.h1`
    font-size: 2.5rem;  
    color: #333;  
`


const MainPage = () => {
    return (
        <Wrapper>   
            <Title>Hello~ React!</Title> 
        </Wrapper>
    )
}

export default MainPage