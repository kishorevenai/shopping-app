import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; 
import './Navbar.scss'
import en from '../../img/en.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>  
      <div className='wrapper'>
        <div className='left'>
           <div className='item'>
              <img src={ en } alt = ""></img>
              <KeyboardArrowDownIcon/>
           </div>
           <div className='item'>
              <span>USD</span>
              <KeyboardArrowDownIcon/>
           </div>
           <div className='item'>
              <Link className='link' to='/products'>Women</Link>
           </div>
           <div className='item'>
              <Link className='link' to='/products'>Men</Link>
           </div>
           <div className='item'>
              <Link className='link' to='/products'>Children</Link>
           </div>
        </div>      
        <div className='center'>
           <Link className='link' to='/'>LAMASTORE</Link>
        </div>
        <div className='right'>
            <div className='item'>
              <Link className='link' to='/'>Homepage</Link>
            </div>
            <div className='item'>
              <Link className='link' to='/'>About</Link>
            </div>
            <div className='item'>
              <Link className='link' to='/'>Contact</Link>
            </div>
            <div className='item'>
              <Link className='link' to='/'>Stores</Link>
            </div>   
            <div className='icons'>
               <SearchIcon/>
               <PersonOutlineIcon/>
               <FavoriteBorderIcon/>
               <div className='cartIcon'>
                 <ShoppingCartIcon/>
                 <span>0</span>
               </div>
            </div>      
        </div>
      </div>  
    </div>
  )
}

export default Navbar
 