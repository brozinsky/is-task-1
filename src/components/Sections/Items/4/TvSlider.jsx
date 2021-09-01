import React from 'react'
import arrow from '../../../../assets/arrow.svg'
import { ReactComponent as PlayIcon } from '../../../../assets/4/icon-play.svg'
import img1 from '../../../../assets/4/section-4-1.png'
import img2 from '../../../../assets/4/section-4-2.png'
import TvImage from './TvImage'

const movies = [
    { id: 1, name: 'Anatomia Magii', chanel: 'Discovery Chanel', img: img1 },
    { id: 2, name: 'Lorem ipsum', chanel: 'Dolor Chanel', img: img2 },
]

const TvSlider = () => {
    const [activeMovie, setActiveMovie] = React.useState(movies[0])

    const handlePrev = () => {
        if (activeMovie.id > 1) {
            setActiveMovie(movies[activeMovie.id - 1])
        } else {
            setActiveMovie(movies[movies.length - 1])
        }
    }

    const handleNext = () => {
        if (activeMovie.id < movies.length) {
            setActiveMovie(movies[activeMovie.id + 1 - 1])
        } else {
            setActiveMovie(movies[0])
        }
    }

    return (
        <div className="tv__bot">
            <button className="tv__play">
                <PlayIcon />
            </button>
            <TvImage activeMovie={activeMovie} />
            <button onClick={handlePrev}>
                <img className='tv__arrow tv__arrow--left' src={arrow} alt="Previous" />
            </button>
            <button onClick={handleNext}>
                <img className='tv__arrow tv__arrow--right' src={arrow} alt="Next" />
            </button>
            <h3 className="tv__bot-name">{activeMovie.name}</h3>
            <span className="tv__bot-secondary">{activeMovie.chanel}</span>
        </div>
    )
}

export default TvSlider