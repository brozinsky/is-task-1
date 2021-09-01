import React from 'react'
import { ReactComponent as PresentIcon } from '../../../../assets/1/icon-present.svg'
import { ReactComponent as MouseIcon } from '../../../../assets/1/icon-mouse.svg'
import { ReactComponent as PlusIcon } from '../../../../assets/1/icon-plus.svg'

const SliderContainer = () => {
    return (
        <div className="slider__container">
            <span className='slider__info-secondary'>
                Zyskaj więcej
            </span>
            <div>
                <div className="slider__icon-container">
                    <div className="slider__icon">
                        <MouseIcon />
                    </div>
                    <PlusIcon />
                    <div className="slider__icon">
                        <PresentIcon />
                    </div>
                </div>
                <h1 className='slider__info'>
                    <span className="slider__info-top">
                        Kup internet,
                    </span>
                    <span className="slider__info-bottom">
                        <span className='slider__info-left'>
                            a
                            <em className='slider__info-purple'>
                                <em className='slider__info-bold'>
                                    HBO
                                </em>
                                GO
                            </em>
                            <span className='slider__info-small'>
                                <br />
                                Dostaniesz za
                            </span>
                        </span>
                        <span className='slider__info-price'>
                            <span className='slider__info-price-big'>1</span>
                            zł
                        </span>
                    </span>
                </h1>
            </div>
        </div>
    )
}

export default SliderContainer
