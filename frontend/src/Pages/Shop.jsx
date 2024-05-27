import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from "../Components/Popular/Popular";
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLatter from '../Components/NewsLatter/NewsLatter';

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular />
        <Offers />
        <NewCollections />
        <NewsLatter />
    </div>
  )
}

export default Shop
