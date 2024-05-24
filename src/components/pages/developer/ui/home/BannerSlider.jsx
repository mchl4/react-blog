import React from 'react'

const BannerSlider = () => {
  return (
    <div className='banner-slider'>

        <div className='relative flex justify-center items-center h-[50vh]'>
            {/* <div className='h-[50vh] w-full bg-black/50'></div> */}
            <img src="https://pbs.twimg.com/media/GISEeG0bMAA3nxi?format=jpg&name=4096x4096" alt="" className='object-cover h-[50vh] w-full absolute top-0 left-0 -z-[1]' />

            <div className='flex flex-col justify-center text-center h-[50vh] w-full bg-black/50'>
                <ul className='flex justify-center gap-2'>
                    <li className='bg-stone-600 px-4 py-1 rounded-full text-white font-bold text-xs'>Ppop</li>
                </ul>

                <h2 className='px-1 mt-4 text-balance text-3xl text-primary'>Nation's Girl Group</h2>

                <ul className='flex justify-center gap-4 text-sm text-primary'>
                    <li>Tan</li>
                    <li>May 22, 2024</li>
                </ul>

            </div>

        </div>
        
    </div>
  )
}

export default BannerSlider