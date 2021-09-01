import React from 'react'
import img1 from '../../../../assets/1/section-1-1.png'
import img2 from '../../../../assets/1/section-1-2.png'
import img3 from '../../../../assets/1/section-1-3.png'

const SliderImage = ({ activeSlide }) => {
    return (
        <img className='slider__img'
            src={
                {
                    1: img1,
                    2: img2,
                    3: img3
                }[activeSlide]
            }
            alt="Zyskaj więcej" />
    )
}

export default SliderImage