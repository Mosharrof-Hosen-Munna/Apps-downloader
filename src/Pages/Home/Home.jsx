import React from 'react'
import Hero from './Hero/Hero'
import Stats from './Stats/Stats'
import TrendingApps from './TrendingApps/TrendingApps'

const appsPromise = fetch('/apps.json').then(res => res.json())

const Home = () => {
  return (
    <div>
      <Hero/>
      <Stats/>
      <TrendingApps appsPromise={appsPromise}/>
    </div>
  )
}

export default Home