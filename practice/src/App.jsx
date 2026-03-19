import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './componerts/Header';
import Main from './componerts/Main'
import Footer from './componerts/Footer'

function App() {
   
  const name = "박주영";
  const isLogined = true;
  let message;

  if(isLogined) {
      message = "로그인 상태입니다.";
    } else {
      message = "로그아웃 상태입니다.";
    } 

  return (
    <>
      <Header />
      
      <div>{name}님, <span>{message}</span></div>

      <Main />
      
      <Footer />     
      
    </>
  )
}

export default App
