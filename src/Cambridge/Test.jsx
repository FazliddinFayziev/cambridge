import { SectionCard } from '../components'
import { sections } from '../cambridgeArray'

export const Test = () => {
  return (
    <div>
      <section className=''>
        <div className='flex justify-center items-center'>
          <h1 className='font-serif border-b-2 border-b-blue-900 my-10'>
            CHOOSE TEST
          </h1>
        </div>
        <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'>
          <Section />
        </div>
      </section>
    </div>
  )
}

// TEST MAP FUNCTION
const Section = () => {
  return (
    <>
      {sections.map((array, i) => {
        return <SectionCard key={i} {...array} />
      })}
    </>
  )
}

export default Test
