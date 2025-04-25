import React from 'react'
import Header from './Header'

const Home = () => {
  return (
    <div className="bg-[url(./assets/heroImage.png)] absolute inset-0  h-[750px]">
      <Header/>
     <div className='m-3 border border-amber-500'>
         <div className='border rounded-2xl w-[221px] h-[32px] bg-blue-300 text-white text-sm text-center'>
         <p>The Ultimate Hotel Experience</p>
         </div>
         <div className='h-[114px] w-[598px] '>
          <p className='text-[6px]'>Discover Your Perfect </p>
          <p className='text-[6px]'>Getaway Destination</p>
         </div>
         <div>
          <p>Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today.</p>
         </div>
     </div>
    </div>
  )
}

export default Home
