import React from 'react'

import PostTable from './PostTable'
import ModalAddPost from './ModalAddPost'
import ModalError from '../../ui/partials/modals/ModalError'
import Toast from '../../ui/partials/Toast'
import { setIsAdd } from '../../../../../store/StoreAction'
import useQueryData from '../../../../custom-hook/useQueryData'
import { StoreContext } from '../../../../../store/StoreContext'
import Header from '../../ui/partials/Header'
import { FiPlus } from 'react-icons/fi'
import Navigation from '../../ui/partials/Navigation'
import Searchbar from './Searchbar'

const Post = () => {
  const {store, dispatch} = React.useContext(StoreContext)
  const [isSearch, setIsSeach] = React.useState(false)
  const [keyword, setKeyword] = React.useState('')
  const [itemEdit, setItemEdit] = React.useState('');

  const {
      isLoading,
      isFetching,
      error,
      data: post,
    } = useQueryData(
      isSearch ? "/v1/post/search" : "/v1/post", // endpoint
      isSearch ? "post" : "get", // method
      "post", // key
      {
          searchValue: keyword
      }
    );
   
    const handleAdd = () => {
      dispatch(setIsAdd(true));
      setItemEdit(null)
      
    }

return (
  <>
  <section className='flex overflow-x-hidden'>
      <Navigation menu="post"/>
      <main className='w-[calc(100%-250px)]'>
          <Header/>

          <div className='flex relative'>
              <div className={`main-wrapper  px-4 py-3 w-full`}>
                  <div>
                      <h1 className='mb-0 text-accent'>Dashboard</h1>
                      <p className='text-accent text-sm'>Post Articles</p>
                      
                      
                  </div>


                   <div className='tab flex gap-3 justify-end items-center mt-8 border-b border-line pb-5 mb-10'>
                   <Searchbar setIsSeach={setIsSeach} setKeyword={setKeyword}/>
                       <button className='btn btn--accent flex gap-1 items-center'onClick={handleAdd}>
                           <FiPlus/>New 
                       </button>
                   </div>

                  <PostTable isLoading={isLoading} post={post} isFetching={isFetching} setItemEdit={setItemEdit}/>

                  </div>

                {store.isAdd &&  <ModalAddPost itemEdit={itemEdit} position="center"/>}
                {store.error && <ModalError position="center"/>}
                {store.success && <Toast position="center"/>}

                
          </div>
      </main>
  </section>
  </>
)
}

export default Post