import React from 'react'
import Header from '../components/Header';
import HeroTest from '../components/HeroTest';
import Footer from "../components/Footer";
import AboutTest from '../components/AboutTest';
import { Cambridge_1,
         Cambridge_2, 
         Cambridge_3, 
         Cambridge_4, 
         Cambridge_5, 
         Cambridge_6, 
         Cambridge_7, 
         Cambridge_8, 
         Cambridge_9, 
         Cambridge_10, 
         Cambridge_11, 
         Cambridge_12, 
         Cambridge_13, 
         Cambridge_14, 
         Cambridge_15, 
         Cambridge_16, 
         Cambridge_17, 
        } from '../cambridgeArray';



// Cambridge 1 ================================================================================================>
// Cambridge 1 ================================================================================================>
// Cambridge 1 ================================================================================================>
export const Cambridge1 = () => {
  return (
    <div>
      <Header />
      <HeroTest />
      <Test1 />
      <Footer />
    </div>
  )
}
// TEST
const Test1 = () => {
  return (
    <section className=''>
        <div className='flex justify-center items-center'>
           <h1 className='font-serif border-b-2 border-b-blue-900 my-10'>CHOOSE TEST</h1> 
        </div>
        <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'>
          <TestMap1 />
        </div>
        
    </section>
  )
}
// TEST MAP FUNCTION 
const TestMap1 = () => {
  return (
    <>
      {Cambridge_1.map((array) => {
        return (
          <AboutTest {...array} />
        )
      })}
    </>
  )
}



// Cambridge 2 =========================================================================================>
// Cambridge 2 =========================================================================================>
// Cambridge 2 =========================================================================================>
export const Cambridge2 = () => {
  return (
    <div>
      <Header />
      <HeroTest />
      <Test2 />
      <Footer />
    </div>
  )
}
// TEST
const Test2 = () => {
  return (
    <section className=''>
        <div className='flex justify-center items-center'>
           <h1 className='font-serif border-b-2 border-b-blue-900 my-10'>CHOOSE TEST</h1> 
        </div>
        <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'>
          <TestMap2 />
        </div>
        
    </section>
  )
}
// TEST MAP FUNCTION 
const TestMap2 = () => {
  return (
    <>
      {Cambridge_2.map((array) => {
        return (
          <AboutTest {...array} />
        )
      })}
    </>
  )
}



// Cambridge 3 =========================================================================================>
// Cambridge 3 =========================================================================================>
// Cambridge 3 =========================================================================================>
export const Cambridge3 = () => {
  return (
    <div>
      <Header />
      <HeroTest />
      <Test3 />
      <Footer />
    </div>
  )
}
// TEST
const Test3 = () => {
  return (
    <section className=''>
        <div className='flex justify-center items-center'>
           <h1 className='font-serif border-b-2 border-b-blue-900 my-10'>CHOOSE TEST</h1> 
        </div>
        <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'>
          <TestMap3 />
        </div>
        
    </section>
  )
}
// TEST MAP FUNCTION 
const TestMap3 = () => {
  return (
    <>
      {Cambridge_3.map((array) => {
        return (
          <AboutTest {...array} />
        )
      })}
    </>
  )
}



// Cambridge 4 =========================================================================================>
// Cambridge 4 =========================================================================================>
// Cambridge 4 =========================================================================================>
export const Cambridge4 = () => {
  return (
    <div>
      <Header />
      <HeroTest />
      <Test4 />
      <Footer />
    </div>
  )
}
// TEST
const Test4 = () => {
  return (
    <section className=''>
        <div className='flex justify-center items-center'>
           <h1 className='font-serif border-b-2 border-b-blue-900 my-10'>CHOOSE TEST</h1> 
        </div>
        <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'>
          <TestMap4 />
        </div>
        
    </section>
  )
}
// TEST MAP FUNCTION 
const TestMap4 = () => {
  return (
    <>
      {Cambridge_4.map((array) => {
        return (
          <AboutTest {...array} />
        )
      })}
    </>
  )
}



// Cambridge 5 =========================================================================================>
// Cambridge 5 =========================================================================================>
// Cambridge 5 =========================================================================================>
export const Cambridge5 = () => {
  return (
    <div>
      <Header />
      <HeroTest />
      <Test5 />
      <Footer />
    </div>
  )
}
// TEST
const Test5 = () => {
  return (
    <section className=''>
        <div className='flex justify-center items-center'>
           <h1 className='font-serif border-b-2 border-b-blue-900 my-10'>CHOOSE TEST</h1> 
        </div>
        <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'>
          <TestMap5 />
        </div>
        
    </section>
  )
}
// TEST MAP FUNCTION 
const TestMap5 = () => {
  return (
    <>
      {Cambridge_5.map((array) => {
        return (
          <AboutTest {...array} />
        )
      })}
    </>
  )
}



// Cambridge 6 =========================================================================================>
// Cambridge 6 =========================================================================================>
// Cambridge 6 =========================================================================================>
export const Cambridge6 = () => {
  return (
    <div>
      <Header />
      <HeroTest />
      <Test6 />
      <Footer />
    </div>
  )
}
// TEST
const Test6 = () => {
  return (
    <section className=''>
        <div className='flex justify-center items-center'>
           <h1 className='font-serif border-b-2 border-b-blue-900 my-10'>CHOOSE TEST</h1> 
        </div>
        <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'>
          <TestMap6 />
        </div>
        
    </section>
  )
}
// TEST MAP FUNCTION 
const TestMap6 = () => {
  return (
    <>
      {Cambridge_6.map((array) => {
        return (
          <AboutTest {...array} />
        )
      })}
    </>
  )
}




// Cambridge 7 =========================================================================================>
// Cambridge 7 =========================================================================================>
// Cambridge 7 =========================================================================================>
export const Cambridge7 = () => {
  return (
    <div>
      <Header />
      <HeroTest />
      <Test7 />
      <Footer />
    </div>
  )
}
// TEST
const Test7 = () => {
  return (
    <section className=''>
        <div className='flex justify-center items-center'>
           <h1 className='font-serif border-b-2 border-b-blue-900 my-10'>CHOOSE TEST</h1> 
        </div>
        <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'>
          <TestMap7 />
        </div>
        
    </section>
  )
}
// TEST MAP FUNCTION 
const TestMap7 = () => {
  return (
    <>
      {Cambridge_7.map((array) => {
        return (
          <AboutTest {...array} />
        )
      })}
    </>
  )
}



// Cambridge 8 =========================================================================================>
// Cambridge 8 =========================================================================================>
// Cambridge 8 =========================================================================================>
export const Cambridge8 = () => {
  return (
    <div>
      <Header />
      <HeroTest />
      <Test8 />
      <Footer />
    </div>
  )
}
// TEST
const Test8 = () => {
  return (
    <section className=''>
        <div className='flex justify-center items-center'>
           <h1 className='font-serif border-b-2 border-b-blue-900 my-10'>CHOOSE TEST</h1> 
        </div>
        <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'>
          <TestMap8 />
        </div>
        
    </section>
  )
}
// TEST MAP FUNCTION 
const TestMap8 = () => {
  return (
    <>
      {Cambridge_8.map((array) => {
        return (
          <AboutTest {...array} />
        )
      })}
    </>
  )
}



// Cambridge 9 =========================================================================================>
// Cambridge 9 =========================================================================================>
// Cambridge 9 =========================================================================================>
export const Cambridge9 = () => {
  return (
    <div>
      <Header />
      <HeroTest />
      <Test9 />
      <Footer />
    </div>
  )
}
// TEST
const Test9 = () => {
  return (
    <section className=''>
        <div className='flex justify-center items-center'>
           <h1 className='font-serif border-b-2 border-b-blue-900 my-10'>CHOOSE TEST</h1> 
        </div>
        <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'>
          <TestMap9 />
        </div>
        
    </section>
  )
}
// TEST MAP FUNCTION 
const TestMap9 = () => {
  return (
    <>
      {Cambridge_9.map((array) => {
        return (
          <AboutTest {...array} />
        )
      })}
    </>
  )
}



// Cambridge 10 =========================================================================================>
// Cambridge 10 =========================================================================================>
// Cambridge 10 =========================================================================================>
export const Cambridge10 = () => {
  return (
    <div>
      <Header />
      <HeroTest />
      <Test10 />
      <Footer />
    </div>
  )
}
// TEST
const Test10 = () => {
  return (
    <section className=''>
        <div className='flex justify-center items-center'>
           <h1 className='font-serif border-b-2 border-b-blue-900 my-10'>CHOOSE TEST</h1> 
        </div>
        <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'>
          <TestMap10 />
        </div>
        
    </section>
  )
}
// TEST MAP FUNCTION 
const TestMap10 = () => {
  return (
    <>
      {Cambridge_10.map((array) => {
        return (
          <AboutTest {...array} />
        )
      })}
    </>
  )
}



// Cambridge 11 =========================================================================================>
// Cambridge 11 =========================================================================================>
// Cambridge 11 =========================================================================================>
export const Cambridge11 = () => {
  return (
    <div>
      <Header />
      <HeroTest />
      <Test11 />
      <Footer />
    </div>
  )
}
// TEST
const Test11 = () => {
  return (
    <section className=''>
        <div className='flex justify-center items-center'>
           <h1 className='font-serif border-b-2 border-b-blue-900 my-10'>CHOOSE TEST</h1> 
        </div>
        <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'>
          <TestMap11 />
        </div>
        
    </section>
  )
}
// TEST MAP FUNCTION 
const TestMap11 = () => {
  return (
    <>
      {Cambridge_11.map((array) => {
        return (
          <AboutTest {...array} />
        )
      })}
    </>
  )
}



// Cambridge 12 =========================================================================================>
// Cambridge 12 =========================================================================================>
// Cambridge 12 =========================================================================================>
export const Cambridge12 = () => {
  return (
    <div>
      <Header />
      <HeroTest />
      <Test12 />
      <Footer />
    </div>
  )
}
// TEST
const Test12 = () => {
  return (
    <section className=''>
        <div className='flex justify-center items-center'>
           <h1 className='font-serif border-b-2 border-b-blue-900 my-10'>CHOOSE TEST</h1> 
        </div>
        <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'>
          <TestMap12 />
        </div>
        
    </section>
  )
}
// TEST MAP FUNCTION 
const TestMap12 = () => {
  return (
    <>
      {Cambridge_12.map((array) => {
        return (
          <AboutTest {...array} />
        )
      })}
    </>
  )
}



// Cambridge 13 =========================================================================================>
// Cambridge 13 =========================================================================================>
// Cambridge 13 =========================================================================================>
export const Cambridge13 = () => {
  return (
    <div>
      <Header />
      <HeroTest />
      <Test13 />
      <Footer />
    </div>
  )
}
// TEST
const Test13 = () => {
  return (
    <section className=''>
        <div className='flex justify-center items-center'>
           <h1 className='font-serif border-b-2 border-b-blue-900 my-10'>CHOOSE TEST</h1> 
        </div>
        <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'>
          <TestMap13 />
        </div>
        
    </section>
  )
}
// TEST MAP FUNCTION 
const TestMap13 = () => {
  return (
    <>
      {Cambridge_13.map((array) => {
        return (
          <AboutTest {...array} />
        )
      })}
    </>
  )
}




// Cambridge 14 =========================================================================================>
// Cambridge 14 =========================================================================================>
// Cambridge 14 =========================================================================================>
export const Cambridge14 = () => {
  return (
    <div>
      <Header />
      <HeroTest />
      <Test14 />
      <Footer />
    </div>
  )
}
// TEST
const Test14 = () => {
  return (
    <section className=''>
        <div className='flex justify-center items-center'>
           <h1 className='font-serif border-b-2 border-b-blue-900 my-10'>CHOOSE TEST</h1> 
        </div>
        <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'>
          <TestMap14 />
        </div>
        
    </section>
  )
}
// TEST MAP FUNCTION 
const TestMap14 = () => {
  return (
    <>
      {Cambridge_14.map((array) => {
        return (
          <AboutTest {...array} />
        )
      })}
    </>
  )
}




// Cambridge 15 =========================================================================================>
// Cambridge 15 =========================================================================================>
// Cambridge 15 =========================================================================================>
export const Cambridge15 = () => {
  return (
    <div>
      <Header />
      <HeroTest />
      <Test15 />
      <Footer />
    </div>
  )
}
// TEST
const Test15 = () => {
  return (
    <section className=''>
        <div className='flex justify-center items-center'>
           <h1 className='font-serif border-b-2 border-b-blue-900 my-10'>CHOOSE TEST</h1> 
        </div>
        <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'>
          <TestMap15 />
        </div>
        
    </section>
  )
}
// TEST MAP FUNCTION 
const TestMap15 = () => {
  return (
    <>
      {Cambridge_15.map((array) => {
        return (
          <AboutTest {...array} />
        )
      })}
    </>
  )
}



// Cambridge 16 =========================================================================================>
// Cambridge 16 =========================================================================================>
// Cambridge 16 =========================================================================================>
export const Cambridge16 = () => {
  return (
    <div>
      <Header />
      <HeroTest />
      <Test16 />
      <Footer />
    </div>
  )
}
// TEST
const Test16 = () => {
  return (
    <section className=''>
        <div className='flex justify-center items-center'>
           <h1 className='font-serif border-b-2 border-b-blue-900 my-10'>CHOOSE TEST</h1> 
        </div>
        <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'>
          <TestMap16 />
        </div>
        
    </section>
  )
}
// TEST MAP FUNCTION 
const TestMap16 = () => {
  return (
    <>
      {Cambridge_16.map((array) => {
        return (
          <AboutTest {...array} />
        )
      })}
    </>
  )
}




// Cambridge 17 =========================================================================================>
// Cambridge 17 =========================================================================================>
// Cambridge 17 =========================================================================================>
export const Cambridge17 = () => {
  return (
    <div>
      <Header />
      <HeroTest />
      <Test17 />
      <Footer />
    </div>
  )
}
// TEST
const Test17 = () => {
  return (
    <section className=''>
        <div className='flex justify-center items-center'>
           <h1 className='font-serif border-b-2 border-b-blue-900 my-10'>CHOOSE TEST</h1> 
        </div>
        <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'>
          <TestMap17 />
        </div>
        
    </section>
  )
}
// TEST MAP FUNCTION 
const TestMap17 = () => {
  return (
    <>
      {Cambridge_17.map((array) => {
        return (
          <AboutTest {...array} />
        )
      })}
    </>
  )
}



export default (Cambridge1, 
                Cambridge2, 
                Cambridge3, 
                Cambridge4, 
                Cambridge5, 
                Cambridge6, 
                Cambridge7, 
                Cambridge8, 
                Cambridge9, 
                Cambridge10, 
                Cambridge11, 
                Cambridge12,
                Cambridge13,
                Cambridge14,
                Cambridge15,
                Cambridge16,
                Cambridge17
                ) ;