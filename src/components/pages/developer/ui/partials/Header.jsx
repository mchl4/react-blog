import React from 'react'
import { CiBellOn } from 'react-icons/ci'
import { LiaAngleDownSolid, LiaKeySolid, LiaSignOutAltSolid, LiaUserCircle } from 'react-icons/lia'
import { Link } from 'react-router-dom'

import { StoreContext } from '../../../../../store/StoreContext'
import { checkLocalStorage } from '../../../../helpers/functions-general'

const Header = () => {
  const [showDropDown, setShowDropDown] = React.useState(false)
 const {store} = React.useContext(StoreContext)

 const name = store.credentials?.data.user_name
 const email = store.credentials?.data.user_email

 const handleDropDown = () => setShowDropDown(!showDropDown)

 const handleLogout = () => {
  setTimeout(() => {
    if (checkLocalStorage() !== null) {
      localStorage.removeItem("glatoken");
         window.location.replace(`/login`);
      return;
    }
    setLoading(false);
  }, 1500);
};
 

  return (
    <header className='header px-4 py-3 border-b border-line text-accent'>
        <div className='flex justify-end items-center gap-4 w-full relative'>

            <button className='text-2xl'><CiBellOn/></button>
            <img src="https://via.placeholder.com/40x40" alt="" className=' size-[40px] rounded-full object-cover '/>
            <button className='flex items-center gap-5 text-accent' onClick={handleDropDown}>{name}<LiaAngleDownSolid/></button>

          <div className={`${showDropDown ? "block" : "hidden"} z-50 header-dropdown absolute bg-secondary p-4 rounded-md right-0 top-[calc(100%+10px)] text-center`}>

            <img src="https://via.placeholder.com/40x40" alt="" className=' size-[40px] rounded-full object-cover mx-auto mb-2'/>
            <h4 className='mb-1'>{name}</h4>
            <p className='text-sm text-accent w-[200px] truncate'>{email}</p>
            <ul className='flex justify-center gap-5'> 
                <li><Link to="#" className='btn btn--content text-2xl'><LiaUserCircle/></Link></li>
                <li><Link to="#" className='btn btn--content text-2xl'><LiaKeySolid/></Link></li>
                <li><button type='button' className='btn btn--content text-2xl' onClick={handleLogout}><LiaSignOutAltSolid/></button></li>
            </ul>
            </div>
        </div>
    </header>
  )
}

export default Header