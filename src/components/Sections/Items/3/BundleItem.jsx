import React from 'react'
import plus from '../../../../assets/3/section-3-icon-plus.svg'

const BundleItem = ({ text, icon, isPlus }) => {
    return (
        <>
            {isPlus
                ? <img className='icon__plus' src={plus} alt='Plus' />
                : null}
            <div className='icon'>
                <img className='icon__img' src={icon} alt={text} />
                <div className="icon__text-container">
                    <span className='icon__text-thin'>wybierz</span>
                    <span className='icon__text'>{text}</span>
                </div>
            </div>
        </>
    )
}

export default BundleItem
