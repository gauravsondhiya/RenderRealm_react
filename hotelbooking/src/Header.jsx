import React from 'react'
import {assets} from './assets/assets.js'
const Header =()=>{
    return (
        <>
        <div className='border-amber-500  text-white font-xl flex justify-between m-5 p-2' >
             <div>
                <img src={assets.logo} alt="logo" />
             </div>
             <div>
                <ul className='flex gap-4 text-xl'>
                    <li>Home</li>
                    <li>Hotel</li>
                    <li>Experience</li>
                    <li>About</li>
                </ul>
             </div>
             <div className='flex gap-3'>
                <button>
                    <img src={assets.searchIcon} alt="searchlogo"/>
                </button>
                <button>
                    <img src={assets.userIcon}alt="signup"/>
                </button>
                <button className='bg-black text-white rounded-2xl w-[95px] h-[34px]'>
                   Login
                </button>
             </div>
        </div>
        </>
    )
}

export default Header;