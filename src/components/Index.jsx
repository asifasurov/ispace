import React, { useContext } from 'react'
import HeroBanner from './HeroBanner'
import ProductCategories from './ProductCategories'
import SeeWhatsNew from './SeeWhatsNew'
import PromoBanners from './PromoBanners'
import DiscoverServices from './DiscoverServices'
import GreatDealsSlider from './GreatDealsSlider'
import StoreClasses from './StoreClasses'
import FeaturesServices from './FeaturesServices'
import FeaturedAccessories from './FeaturedAccessories'
import AboutStore from './AboutStore'
import  { DATA } from './context/DataContext'

function Index() {

  const {mehsul} = useContext(DATA)
  console.log(mehsul);
  return (
    <>
      <HeroBanner />
      <ProductCategories />
      <SeeWhatsNew />
      <PromoBanners />
      <DiscoverServices />
      <GreatDealsSlider />
      <StoreClasses />
      <FeaturesServices />
      <FeaturedAccessories />
      <AboutStore />
    </>
  )
}

export default Index
