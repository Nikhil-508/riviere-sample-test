import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import BottomNavFixed from './Pages/BottomNavFixed/BottomNavFixed'
import Subscription from './Pages/Subscription/Subscription'
import Coupon from './Pages/Coupon/Coupon'
import Cart from './Pages/Cart/Cart'
import Profile from './Pages/Profile/Profile'
import FiveGallon from './Pages/FiveGallon/FiveGallon'
import SmallBottle from './Pages/SmallBottle/SmallBottle'
import SingleCoupon from './Pages/Singlecoupon/SingleCoupon'
import SubscriptionSuccess from './Pages/SubscriptionSuccess/SubscriptionSuccess'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<BottomNavFixed/>}/>
      <Route path='/subscription' element={<Subscription/>}/>
      <Route path='/coupon' element={<Coupon/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/five-gallon' element={<FiveGallon/>} />
      <Route path='/small-bottle' element={<SmallBottle/>}/>
      <Route path='/single-coupon' element={<SingleCoupon/>}/>
      <Route path='/subscription-success' element={<SubscriptionSuccess/>}/>
    </Routes>
     
    </BrowserRouter>
  )
}

export default App
