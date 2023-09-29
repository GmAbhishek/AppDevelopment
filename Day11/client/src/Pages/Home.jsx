import React from 'react'
import Footer from '../Components/Footer'
import '../CSS/Home.css'
import Hero from '../Components/Hero'
import Head from '../Components/Head'
import Header from '../Components/Header'

const Home = () => {
  return (
    <>
      <div className="background">
        <Head />
        <Header />
        <Hero />
      </div>
      <Footer />
    </>
  )
}

export default Home