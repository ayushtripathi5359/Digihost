import React from 'react'
import HeroSection from './components/header'
import PhilosophySection from './components/PhilosophySection'
import StackingSections from './components/StackingSections'
import FounderStory from './components/FounderStory'
import GalleryComponent from './components/GalleryComponent'
import BrandList from './components/BrandList'
import JoinMovement from './components/JoinMovement'
const App = () => {
  return (
    <>
    <HeroSection/>
    <PhilosophySection/>
    <StackingSections/>
    <FounderStory/>
    <GalleryComponent/>
    <BrandList></BrandList>
    <JoinMovement/>
    </>
  )
}

export default App