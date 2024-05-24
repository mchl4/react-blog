import React from 'react'


import { Link } from 'react-router-dom'
import PostTable from './CategoryTable'
import { FiPlus } from 'react-icons/fi'
import useQueryData from '../../../../custom-hook/useQueryData'
import { setIsAdd } from '../../../../../store/StoreAction'
import { StoreContext } from '../../../../../store/StoreContext'



import ModalAddCategory from './ModalAddCategory'
import CategoryTable from './CategoryTable'
import Navigation from '../../ui/partials/Navigation'
import Header from '../../ui/partials/Header'
import ModalError from '../../ui/partials/modals/ModalError'
import Toast from '../../ui/partials/Toast'
import Searchbar from '../post/Searchbar'

const Category = () => {
    const {store, dispatch} = React.useContext(StoreContext)
    const [isSearch, setIsSearch] = React.useState(false)
    const [keyword , setKeyword] = React.useState('');
    const [itemEdit , setItemEdit] = React.useState('');

    const {
        isLoading,
        isFetching,
        error,
        data: category,
      } = useQueryData (
       "/v1/category", // endpoint
       "get", // method
       "category", // key      
      );


      const handleAdd = () => {
        dispatch(setIsAdd(true));
        setItemEdit(null)
    }
  return (
    <section className='flex overflow-hidden'>
     <Navigation menu="category"/>
      <main className='w-[calc(100%-250px)]'>
          <Header/>

          <div className='flex relative'>
              <div className={`main-wrapper  px-4 py-3 w-full`}>
                  <div>
                      <h1 className='mb-0 text-accent'>Dashboard</h1>
                      <p className='text-accent text-sm'>Category</p>
                      
                      
                  </div>


                   <div className='tab flex gap-3 justify-end items-center mt-8 border-b border-line pb-5 mb-10'>
                   <Searchbar setIsSeach={setIsSearch} setKeyword={setKeyword}/>
                       <button className='btn btn--accent flex gap-1 items-center'onClick={handleAdd}>
                           <FiPlus/>New 
                       </button>
                   </div>
            <CategoryTable isLoading={isLoading} category={category} isFetching={isFetching} setItemEdit={setItemEdit}/>
        </div>
    </div>
    </main>

    {store.isAdd && <ModalAddCategory  itemEdit={itemEdit}/>}

    {store.error && <ModalError position="center"/>}
    {store.success && <Toast/>}
</section>
  )
}

export default Category