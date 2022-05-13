import React, { useState } from "react"
import { Mark, Phone } from "../assets/svg"
import "./header.scss"
import RegModal from "./RegionModal/RegModal"

const Header = () => {
  const [modal, setModal] = useState(false)
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
            <i>
              <Phone />
            </i>
            <a href='+998977781708'>+998977781708</a>
          </div>
          <div className='i-2'>
            <i onClick={() => setModal(!false)}>
              <Mark />
            </i>
            {modal && <RegModal setModal={setModal} />}
          </div>
          <div className='i-2'></div>
        </div>
      </div>
      <div className='h-bottom-bar'>
        <div className='h-logo'></div>
        <div className='h-searchBar'></div>
      </div>
    </div>
  )
}

export default Header
