import React from 'react'
import ModalError from './modals/ModalError'
import Toast from './Toast'
import { StoreContext } from '../../../../../store/StoreContext'
import { FiPlus } from 'react-icons/fi'
import Header from './Header'
import Navigation from './Navigation'
import { setIsAdd } from '../../../../../store/StoreAction'
import useQueryData from '../../../../custom-hook/useQueryData'
import ModalAddPost from '../../dashboard/post/ModalAddPost'


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
        <Navigation/>
        <main className='w-[calc(100%-250px)]'>
            <Header/>

            <div className='flex relative'>
                <div className={`main-wrapper  px-4 py-3 w-full`}>
                    <div>
                        <h1 className='mb-0 text-primary'>Dashboard</h1>
                        <p className='text-primary text-sm'>Home Projects Database</p>
                        {/* <Searchbar setIsSeach={setIsSeach} setKeyword={setKeyword}/> */}
                        
                    </div>


                     <div className='tab flex justify-end items-center mt-8 border-b border-line pb-5 mb-10'>
                        
                         <button className='btn btn--content flex gap-1 items-center'onClick={handleAdd}>
                             <FiPlus/>New 
                         </button>
                     </div>

                    <PostTable isLoading={isLoading} post={post} isFetching={isFetching} setItemEdit={setItemEdit}/>

                    </div>

                  {store.isAdd &&  <ModalAddPost itemEdit={itemEdit}/>}
                  {store.error && <ModalError position="center"/>}
                  {store.success && <Toast position="center"/>}

                  
            </div>
        </main>
    </section>
    </>
  )
}

export default Post