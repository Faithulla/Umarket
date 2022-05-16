// import React, { useState } from "react"
// import { useSelector } from "react-redux"
import { Logo, Mark, Phone } from "../assets/svg"
import "./header.scss"
// import RegModal from "./RegionModal/RegModal"
// import Rus from "../assets/Rus.png"
import Eng from "../assets/Eng.png"
import SearchBar from "../SearchBar/Searchbar"
const Header = () => {
  // const [modal, setModal] = useState(false)
  // const lang = useSelector((state) => state.langSlice.lang)

  return (
    <div className='h-container'>
      <div className='h-top-bar'>
        <div className='left-side'>
          <div className='i-1'>Shops</div>
          <div className='i-1'>Feedback</div>
          <div className='i-1'>Delivery</div>
        </div>
        <div className='right-side'>
          <div className='i-2'>
            <i className='phone-icon'>
              <Phone />
            </i>
            <a href='+998977781708'>+998 97 778-17-08</a>
          </div>
          <div className='i-2'>
            <i className='mark-icon'>
              <Mark />
            </i>
            <select>
              <option value=''>Tashkent</option>
              <option value='Khorezm'>Khorezm</option>
              <option value=''>Samarkand</option>
            </select>
          </div>
          <div className='i-2'>
            <i className='flag-icon'>
              <img src={Eng} alt='' />
            </i>
            <select className='lang-selector'>
              <option value='Eng'>Eng</option>
              <option value='Rus'>Rus</option>
            </select>
          </div>
        </div>
      </div>
      <div className='h-bottom-bar'>
        <div className='h-logo'>
          <i className='logo'>
            <Logo />
          </i>
          <h3>market</h3>
        </div>
        <div className='h-searchBar'>
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

export default Header
