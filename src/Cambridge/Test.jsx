import React from 'react'
import { sections } from '../cambridgeArray';
import { Footer, HeroTest, SectionCard } from '../components';
import Header from '../components/Header';



// Cambridge 1 => TEST 1 ================================================>
// Cambridge 1 => TEST 1 ================================================>
// Cambridge 1 => TEST 1 ================================================>
export const Test1_1 = () => {
  return (
    <div>
      <Header />
      <HeroTest />
      <Part1_1 />
      <Footer />
    </div>
  )
}

// TEST 1
const Part1_1 = () => {
  return (
    <section className=''>
        <div className='flex justify-center items-center'>
           <h1 className='font-serif border-b-2 border-b-blue-900 my-10'>CHOOSE TEST</h1> 
        </div>
        <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'>
          <Section1_1 />
        </div>
        
    </section>
  )
}
// TEST MAP FUNCTION 
const Section1_1 = () => {
  return (
    <>
      {sections.map((array) => {
        return (
          <SectionCard {...array} />
        )
      })}
    </>
  )
}

// Cambridge 2 => TEST 2 ================================================>
// Cambridge 2 => TEST 2 ================================================>
// Cambridge 2 => TEST 2 ================================================>
export const Test1_1 = () => {
  return (
    <div>
      <Header />
      <HeroTest />
      <Part1_1 />
      <Footer />
    </div>
  )
}

// TEST 1
const Part1_1 = () => {
  return (
    <section className=''>
        <div className='flex justify-center items-center'>
           <h1 className='font-serif border-b-2 border-b-blue-900 my-10'>CHOOSE TEST</h1> 
        </div>
        <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'>
          <Section1_1 />
        </div>
        
    </section>
  )
}
// TEST MAP FUNCTION 
const Section1_1 = () => {
  return (
    <>
      {sections.map((array) => {
        return (
          <SectionCard {...array} />
        )
      })}
    </>
  )
}

export default Test1_1;