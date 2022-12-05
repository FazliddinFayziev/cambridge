import React, { useState } from 'react';
import Header from '../components/Header';
import HeroTest from '../components/HeroTest';
import Footer from "../components/Footer";
import { CambridgeCard, sections } from '../cambridgeArray';
import SectionCard from '../components/SectionCard';


const Cambridge_8 = () => {
  return (
    <div>
      <Header />
      <HeroTest />
      <Test />
      <Footer />
    </div>
  )
}





const Test = () => {
  const [ test, setTest ] = useState(false);

  const handleTest = () => {
    setTest(!test)
  };
  return (
    <section className=''>
        <div className='flex justify-center items-center'>
           <h1 className='font-serif border-b-2 border-b-blue-900 my-10'>CHOOSE TEST</h1> 
        </div>
        <div onClick={handleTest} className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'>
           {test ? <TestMap /> : <SectionPart />}
        </div>
        
    </section>
  )
}

// PAGE ONE (1) ALL TESTS =====================================================================>
const TestMap = () => {
  return (
    <>
      {CambridgeCard.map((array) => {
        return (
          <AboutTest {...array} />
        )
      })}
    </>
  )
}

const AboutTest = ({img, title}) => {
    return (
        <div className='w-[160px] h-[269px] border-[2px] mx-auto border-purple-900 hover:scale-[1.05] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] my-5 flex flex-col '>
            <div className='flex justify-center'>
                <div className='w-[150px] h-[199px] mt-[1px]'>
                    <img className='object-cover' src={img} alt="" /> 
                </div>
            </div> 
            <h1 className='text-center font-serif font-semibold'>{title}</h1>
              <div className='flex justify-center w-full h-6 bg-blue-900'>
                <div>
                  <button className='font-serif text-[10px] text-white font-semibold'>START</button>
                </div>
              </div>
        </div>
       
    )
}


// PAGE TWO (2) ALL SECTIONS ==================================================================>
const SectionPart = () => {
  return (
    <>
      {sections.map((array) => {
        return (
          <SectionCard {...array}></SectionCard>
        )
      })}
    </>
  )
}





export default Cambridge_8