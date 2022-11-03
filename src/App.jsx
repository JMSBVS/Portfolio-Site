import React from 'react'
import { VStack } from '@chakra-ui/react'
import Home from './components/Home'
import Projects from './components/Projects'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <VStack>
      <VStack p={5}>
        <Header />
        <Home />
        <Projects />
      </VStack>
      <Footer />
    </VStack>


  )
}
