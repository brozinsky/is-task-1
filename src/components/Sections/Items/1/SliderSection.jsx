import React, { useEffect, useState, useRef } from 'react'
import './SliderSection.scss'
import imgBg from '../../../../assets/1/section-1-bg.png'
import SliderPanel from './SliderPanel'
import SliderImage from './SliderImage'
import SliderContainer from './SliderContainer'

const slideBtns = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
]

const SliderSection = () => {
    const [activeSlide, setActiveSlide] = useState(1)

    const length = slideBtns.length
    const autoPlayRef = useRef()

    const handleClick = (buttonId) => {
        setActiveSlide(buttonId)
    }

    useEffect(() => {
        const play = () => {
            autoPlayRef.current()
        }
        const interval = setInterval(play, 6000)
        return () => clearInterval(interval)
    }, [])

    const nextSlide = () => {
        setActiveSlide(
            activeSlide <= length - 1
                ? activeSlide + 1
                : 1)
    }

    useEffect(() => {
        autoPlayRef.current = nextSlide
    })

    return (
        <section className='slider sections__col-2 sc-1'>
            <SliderContainer />
            <SliderPanel activeSlide={activeSlide}
                slideBtns={slideBtns}
                handleClick={handleClick} />
            <SliderImage activeSlide={activeSlide} />
            <img className='slider__bg' src={imgBg} alt="" />
        </section>
    )
}

export default SliderSection