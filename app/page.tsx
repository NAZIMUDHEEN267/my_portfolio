import About from '@/components/About'
import Blogs from '@/components/Blogs'
import Collaboration from '@/components/Collaboration'
import Experience from '@/components/Experience'
import Home from '@/components/Home'
import React from 'react'

function Main() {
  return (
    <div style={{ marginTop: '40px' }}>
      <Home />
      <About />
      <Experience />
      <Collaboration />
      <Blogs />
    </div>
  )
}

export default Main