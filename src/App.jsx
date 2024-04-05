
import { useEffect, useState } from 'react'
import './App.css'
import Background from './Component/Background/Background'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'

function App() {

  let heroData = [
    {text1:'Dive into',text2:'What you love'},
    {text1:"Indulge", text2:"Your passions"},
    {text1:"Give in to", text2:"Your passions"},
  ]
  const [heroCount,setHeroCount] = useState(0)
  const [palyStatus,setPlayStatus] = useState(false)

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count=>{return count ===2?0:count+1}))
    },3000)
  },[])

  return (
    <>
     
      <Background palyStatus={palyStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero heroData ={heroData[heroCount]} heroCount={heroCount} setHeroCount={setHeroCount} palyStatus={palyStatus} setPlayStatus={setPlayStatus}  />
    </>
  )
}

export default App
