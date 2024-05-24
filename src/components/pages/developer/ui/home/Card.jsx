import React from 'react'


const Card = ({height="lg"}) => {

     

  return (
    <>
    

       <div className="card__lg shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)]  p-5 rounded-2xl">

       <div className={`overflow-hidden rounded-xl mb-5 -mt-10 ${height === "lg" ? "h-[500px]" : "h-[300]" }`}>
   
       <img src="https://nylonmanila.com/wp-content/uploads/2024/04/Snapinstaapp_434295995_1674832539711146_829826258136214895_n_1080.jpg" alt="" className={`w-full object-cover $ rounded-xl  h-full overflow-hidden mb-5 hover:scale-110 transition-transform`}/>
       </div>
   
   
       <small className='mb-3 hover:bg-accent bg-stone-600  px-2 py-1 rounded-lg text-white font-bold 
           text-xs'>PPOP</small>
   
           <h2>BINI</h2>
           <p className='line-clamp-3 text-balance'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, et atque nihil dignissimos quisquam consequatur assumenda placeat in, deleniti velit architecto unde asperiores veniam quae, provident amet nesciunt quibusdam ipsam?</p>
   
           <div className='flex justify-between items-center mt-4'>
               <div className='flex gap-3 items-center'>
                   <img src="https://via.placeholder.com/40x40" alt="" className='rounded-full size-10 object-cover' />
                   <small className='mb-0 text-nowrap opacity-60'>Tantan</small>
               </div>
               <small className='opacity-60'>May 22 2024</small>
           </div>
       </div>


    
   

    </>
  )
}

export default Card