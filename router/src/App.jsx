import './App.css'
import Header from './layouts/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './layouts/Main'
import ProductList from './pages/ProductList'
import ProductInfo from './pages/ProductInfo'
import Home from './layouts/Home'

function App() {

  return (
    <>      
      <div>
        <BrowserRouter>
         <Header /> 
          {/* <Home /> */}
          {/* <Main /> */}
          <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/products' element={<ProductList />} />
              {/* :id -> product/1 와 같음 */}
              <Route path='/products/:id' element={<ProductInfo />}></Route>
          </Routes>
        </BrowserRouter>
        
      </div>
      
    </>
  )
}

export default App
