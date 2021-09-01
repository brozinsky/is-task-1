import React from 'react'
import icon from '../../assets/users.svg'
import './WatchCount.scss'

const WatchCount = ({ value, text }) => {
    return (
        <div className="counter__container">
            <hr className='counter__hr' />
            <div className="counter">
                <span className='counter__text'>{text}</span>
                <span className='counter__value'>{value}</span>
                <img className='counter__icon' src={icon} alt="Users" />
            </div>
        </div>
    )
}

export default WatchCount
