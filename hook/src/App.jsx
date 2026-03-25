import { useState } from 'react'
import './App.css'
import Dog from './components/Dog'
import Garden from './components/Garden'
import Counter from './components/Counter'
import Car from './components/Car'
import AddProduct from './AddProduct'
import Box from './components/Box'
import AddDrink from './components/AddDrink'
import User from './components/User'
import Clock from './components/Clock'
import Profile from './card/Profile'
import MapTest from './components/MapTest'
import SignUp from './form/SignUp'
import Signin from './form/Signin'

function App() {

  return (
    <>
    <Signin />
    {/* <SignUp /> */}
    {/* <MapTest /> */}
    {/* <Profile/> */}
    {/* <Clock/> */}
    {/* <User/> */}
      {/* <AddDrink /> */}
      {/* <Box></Box> 사이에 모든것이 {children}으로 전달 */}
      {/* <Box>
        <h3>박스 안의 내용</h3>
        <p>이것은 Box 컴포넌트 안에 있는 내용입니다.</p>
      </Box>
      
      <Box>
        <h3>또 다른 내용</h3>
        <p>이것은 다른 Box 컴포넌트 안에 있는 내용입니다.</p>
      </Box> */}

      {/* <AddProduct /> */}
      {/* <Car /> */}
      {/* <Counter /> */}
      {/* <Garden /> */}
      {/* <Dog breed="말티즈" age={3} /> <br/>
      <Dog breed="진돗개" age={4} /> <br/>
      <Dog breed="푸들" age={2} /> */}
    </>
  )
}

export default App
