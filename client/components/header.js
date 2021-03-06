import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useBeforeunload } from 'react-beforeunload'

import Currency from './common/currency'
import Sort from './common/sort'
import OrderCount from './common/order-count'

const Header = () => {
  const basket = useSelector((s) => s.basket)
  return (
    <div className="w-full">
      {useBeforeunload(() => localStorage.setItem('cart', JSON.stringify(basket)))}
      <div className="flex bg-indigo-800 justify-center items-center p-2 text-white font-bold">
        <div className="text-3xl" id="brand-name">
          <Link to="/" className="flex flex-row items-center">
            <div>
              <img src="images/pepe-smile.png" width="80" alt="frog" />
            </div>
            <div className="ml-4">Pepe&apos;s Shop</div>
          </Link>
        </div>
      </div>
      <div className="flex flex-row">
        <Currency />
        <Sort />
        <OrderCount />
      </div>
    </div>
  )
}

export default React.memo(Header)
