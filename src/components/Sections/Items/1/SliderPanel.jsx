import React from 'react'

const SliderPanel = ({ handleClick, activeSlide, slideBtns }) => {

    return (
        <div className="slider__btn-container">
            {slideBtns.map(({ id }) => {
                return <button key={id}
                    onClick={() => handleClick(id)}
                    className={`slider__btn
                ${activeSlide === id
                            ? 'slider__btn--active'
                            : null}`} />
            })}
        </div>
    )
}

export default SliderPanel