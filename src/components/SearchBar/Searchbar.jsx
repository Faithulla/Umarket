import React from "react"
import { ImageIcon, SearchIcon } from "../assets/svg"
import "./style.scss"
const SearchBar = () => {
  return (
    <div className='search-bar'>
      <SearchIcon className="s-icon"/>
      <input type='text' placeholder='Search for products' />
      <ImageIcon className="img-icon"/>
    </div>
  )
}

export default SearchBar
