import React from 'react'
import HomeCategoryCard from '../../Components/HomeCategoryCard/HomeCategoryCard'
import TopSection from '../../Components/TopSection/Topsection'
import Coupons from '../../Components/Coupons/Coupons'
import Helpline from '../../Components/Helpline/Helpline'
import ProductCards from '../../Components/ProductCards/ProductCards'
import WhyUs from '../../Components/Whyus/WhyUs'

const Home = () => {
  return (
    <div>
      <TopSection/>
      <HomeCategoryCard/>
      <Coupons/>
      <Helpline/>
      <ProductCards/>
      <WhyUs/>
      
    </div>
  )
}

export default Home
