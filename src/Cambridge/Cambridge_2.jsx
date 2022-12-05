import React, { useState } from 'react';
import Header from '../components/Header';
import HeroTest from '../components/HeroTest';
import Footer from "../components/Footer";
import { Cambridge, sections } from '../cambridgeArray';
import SectionCard from '../components/SectionCard';


const Cambridge_2 = () => {
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
  return (
    <section className=''>
        <div className='flex justify-center items-center'>
           <h1 className='font-serif border-b-2 border-b-blue-900 my-10'>CHOOSE TEST</h1> 
        </div>
        <AboutTest /> 
    </section>
  )
}

// PAGE ONE (1) ALL TESTS =====================================================================>
// const TestMap = () => {
//   return (
//     <>
//       {CambridgeCard.map((array) => {
//         return (
//           <AboutTest {...array} />
//         )
//       })}
//     </>
//   )
// }

const AboutTest = () => {
  const [ test, setTest ] = useState(true);

  const handleTest = () => {
    setTest(!test)
  };
    return (
      <>
      <div className={test ? "shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3" : "hidden"}>
        {/* TEST 1 */}
        <div className="w-[160px] h-[250px] border-[2px] mx-auto border-purple-900 hover:scale-[1.05] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] my-5 flex flex-col">
          <div className='flex justify-center'>
              <div className='w-[150px] h-[199px] mt-[1px]'>
                  <img className='object-cover' src={Cambridge[0].img} alt="" /> 
              </div>
          </div> 
          <h1 className='text-center font-serif font-semibold'>{Cambridge[0].title}</h1>
          <div className='flex justify-center w-full h-6 bg-blue-900'>
            <button onClick={handleTest} className='font-serif text-[10px] text-white font-semibold'>START</button>
          </div>
        </div>
        {/* TEST 2 */}
        <div className="w-[160px] h-[250px] border-[2px] mx-auto border-purple-900 hover:scale-[1.05] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] my-5 flex flex-col">
          <div className='flex justify-center'>
              <div className='w-[150px] h-[199px] mt-[1px]'>
                  <img className='object-cover' src={Cambridge[1].img} alt="" /> 
              </div>
          </div> 
          <h1 className='text-center font-serif font-semibold'>{Cambridge[1].title}</h1>
          <div className='flex justify-center w-full h-6 bg-blue-900'>
            <button onClick={handleTest} className='font-serif text-[10px] text-white font-semibold'>START</button>
          </div>
        </div>
        {/* TEST 3 */}
        <div className="w-[160px] h-[250px] border-[2px] mx-auto border-purple-900 hover:scale-[1.05] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] my-5 flex flex-col">
          <div className='flex justify-center'>
              <div className='w-[150px] h-[199px] mt-[1px]'>
                  <img className='object-cover' src={Cambridge[2].img} alt="" /> 
              </div>
          </div> 
          <h1 className='text-center font-serif font-semibold'>{Cambridge[2].title}</h1>
          <div className='flex justify-center w-full h-6 bg-blue-900'>
            <button onClick={handleTest} className='font-serif text-[10px] text-white font-semibold'>START</button>
          </div>
        </div>
        {/* TEST 4 */}
        <div className="w-[160px] h-[250px] border-[2px] mx-auto border-purple-900 hover:scale-[1.05] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] my-5 flex flex-col">
          <div className='flex justify-center'>
              <div className='w-[150px] h-[199px] mt-[1px]'>
                  <img className='object-cover' src={Cambridge[3].img} alt="" /> 
              </div>
          </div> 
          <h1 className='text-center font-serif font-semibold'>{Cambridge[3].title}</h1>
          <div className='flex justify-center w-full h-6 bg-blue-900'>
            <button onClick={handleTest} className='font-serif text-[10px] text-white font-semibold'>START</button>
          </div>
        </div>
      </div>


        <div className={ test ? 'hidden' : 'shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'}>
          {sections.map((array) => {
            return (
            <SectionCard {...array}></SectionCard>
            )
            })}
        </div>
      </>
    )
}





export default Cambridge_2