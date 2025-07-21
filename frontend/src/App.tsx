import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import SignUp from './pages/SignUp'
import Footer from './components/Footer'
import About from './pages/About'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/placeorder' element={<PlaceOrder/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
