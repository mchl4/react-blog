import React from 'react'
import UIHeader from '../partials/UIHeader'
import UIFooter from '../partials/UIFooter'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import useQueryData from '../../../../custom-hook/useQueryData'
import { devBaseImgUrl, getUrlParam } from '../../../../helpers/functions-general'
import Markdown from 'react-markdown'

const Single = () => {
    const id = getUrlParam().get('id')

    const {
        isLoading,
        isFetching,
        error,
        data: post,
      } = useQueryData (
       `/v1/post/${id}`, // endpoint
       "get", // method
       "post", // key
      );

      
      

  return (
    <>

    <UIHeader/>

    <div className='banner mt-5 mb-10'>
        <div className="container">
            <h1 className='max-w-[800px] mx-auto text-center py-10 px-5 mb-0 mt-5 bg-opacity-10 rounded-xl border-header border-opacity-10 border-2 bg-header'>{post?.data[0].post_title}</h1>

        </div>

    </div>

    <div className="container">
        <div className='grid md:grid-cols-[2fr_1fr] gap-10'>

            <div>

            <img src={`${devBaseImgUrl}/${post?.data[0].post_image}`} alt="" className='rounded-xl mb-5'/>

            <article>
            <div className='mb-10'>
                <small className='hover:bg-accent bg-stone-600  px-2 py-1 rounded-lg text-white font-bold text-xs mb-3 inline-block'>{post?.data[0].post_category}</small>

                <h1>{post?.data[0].post_title}</h1>


                
                <div className='flex justify-between items-center mt-4 mb-4'>
                    <div className='flex gap-3 items-center'>
                        <img src="https://via.placeholder.com/40x40" alt="" className='rounded-full size-10 object-cover mb-0' />
                        <small className='mb-0 text-nowrap opacity-60'>{post?.data[0].post_author}</small>
                    </div>
                    
                    <small className='opacity-60'>{post?.data[0].post_publish_date}</small>

                    
                </div>


                <Markdown>
                        {post?.data[0].post_article}
                </Markdown>

                
                
                
                </div>
            </article>

            </div>
            <aside>

            <div className='sticky top-0'>

            <div className="shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)] p-5 rounded-2xl mb-5 ">
                    <img src="https://via.placeholder.com/40x40" alt="" className='rounded-full size-[100px] object-cover mb-5 mx-auto' />
                    <h4 className='text-center'>{post?.data[0].post_author}</h4>
                    <p className='text-center mb-5 !leading-snug'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates amet, itaque molestias at architecto accusamus? Autem vitae est esse, quidem corrupti nisi enim exercitationem! Eaque doloribus culpa quia delectus eos.</p>

            <ul className='flex justify-center gap-4'>
                    <li><Link className='text-2xl'><FaFacebook/></Link></li>
                    <li><Link className='text-2xl'><FaTwitter/></Link></li>
                    <li><Link className='text-2xl'><FaInstagram/></Link></li>
                    <li><Link className='text-2xl'><FaYoutube/></Link></li>
            </ul>

            </div>

            <div className="shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)] p-5 rounded-2xl mb-5 ">
                <h2>Latest Post</h2>

                <div className='grid grid-cols-[90px_1fr] gap-3 mb-4'>
                <img src="https://asset-ent.abs-cbn.com/ent/entertainment/media/onemusic/bini.jpg?ext=.jpg" alt="" className='h-full w-full object-cover' />
                <div>
                    <h4 className='mb-0'>Lorem ipsum, dolor sit amet consectetur adipisicing.</h4>
                    <small>May 22 2024</small>
                </div>
                </div>
            </div>

            </div>

            </aside>

        </div>
        
    </div>
    

    <UIFooter/>

    </>
  )
}

export default Single