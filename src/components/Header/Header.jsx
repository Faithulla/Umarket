// import React, { useState } from "react"
// import { useSelector } from "react-redux"
import {
  CompareIcon,
  FavoriteIcon,
  LoginIcon,
  Logo,
  Mark,
  Phone,
  StoreIcon,
} from "../assets/svg"
import "./header.scss"
// import RegModal from "./RegionModal/RegModal"
// import Rus from "../assets/Rus.png"
import Eng from "../assets/Eng.png"
import SearchBar from "../SearchBar/Searchbar"
import { Link } from "react-router-dom"
const Header = () => {
  // const [modal, setModal] = useState(false)
  // const lang = useSelector((state) => state.langSlice.lang)

  return (
    <div className='h-container'>
      <div className='h-top-bar'>
        <div className='left-side'>
          <div className='i-1'>
            <Link to=''></Link>Shops
          </div>
          <div className='i-1'>
            <Link to=''></Link>Feedback
          </div>
          <div className='i-1'>
            <Link to=''></Link>Delivery
          </div>
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
        <Link to='/'>
          <div className='h-logo'>
            <i className='logo'>
              <Logo />
            </i>
            <h3>market</h3>
          </div>
        </Link>

        <div className='h-searchBar'>
          <SearchBar />
        </div>
        <div className='user-stuff'>
          <div className='Store i-3'>
            <Link to=''>
              <StoreIcon />
              <h3>Store</h3>
            </Link>
          </div>
          <div className='Favorite i-3'>
            <Link to='favorite'>
              <FavoriteIcon />
              <h3>Favorite</h3>
            </Link>
          </div>
          <div className='Compare i-3'>
            <Link to=''>
              <CompareIcon />
              <h3>Compare</h3>
            </Link>
          </div>
          <div className='Login i-3'>
            <Link to=''>
              <LoginIcon />
              <h3>Login</h3>
            </Link>
          </div>
        </div>
      </div>
      <div className='quickSearch'>
        <div className='q-container'>
          <Link to='' className="links">Discounts & Shares</Link>
          <Link to='' className="links">Smartphones & Gadgets</Link>
          <Link to='' className="links">TV & Audio</Link>
          <Link to='' className="links">Kitchen Techs</Link>
          <Link to='' className="links">Beauty & Health</Link>
          <Link to='' className="links">Laptop & PC</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
