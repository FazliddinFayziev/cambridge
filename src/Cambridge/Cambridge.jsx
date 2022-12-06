import { useEffect, useState } from 'react'
import AboutTest from '../components/AboutTest'
import { cambridgeArray } from '../cambridgeArray'

// Cambridge ================================================================================================>
const Cambridge = () => {
  const [id, setId] = useState(null)
  const [cambridgeObj, setCambridgeObj] = useState({})

  useEffect(() => {
    setId(Number(window.location.pathname.split('/').reverse()[0]))
  }, [])

  useEffect(() => {
    if (id >= 1 && id <= 17) {
      const arr = cambridgeArray.filter((item) => item.id === Number(id))

      setCambridgeObj(arr[0])
    }
  }, [id])

  return (
    <div>
      <TestCard cambridge={cambridgeObj} />
    </div>
  )
}

const TestCard = ({ cambridge }) => {
  return (
    <section className=''>
      <div className='flex justify-center items-center'>
        <h1 className='font-serif border-b-2 border-b-blue-900 my-10'>
          CHOOSE TEST
        </h1>
      </div>
      <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'>
        {cambridge.test &&
          cambridge.test.map((array, i) => {
            return <AboutTest key={i} {...array} />
          })}
      </div>
    </section>
  )
}

export default Cambridge
