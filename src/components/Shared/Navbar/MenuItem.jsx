import { NavLink } from 'react-router-dom'
import './menuItem.css'
import cart from '../../../assets/all-products/cart_icon.png'

const MenuItem = () => {
  return (
    <div>
       <ul className='flex md:gap-8 gap-3 text-sm md:text-lg font-semibold flex-row items-center justify-between'>
        <li>
          <NavLink to='/shop'>Shop</NavLink>
        </li>
        <li><NavLink to='/men'>Men</NavLink></li>
        <li><NavLink to='/women'>Women</NavLink></li>
        <li><NavLink to='/kids'>kids</NavLink></li>
        <li><NavLink to='/carts'>
          <p className='badge'>0</p>
            <img src={cart} width='30' className='-mt-2' height='30' alt="" />
          </NavLink></li>

       </ul>
    </div>
  )
}

export default MenuItem