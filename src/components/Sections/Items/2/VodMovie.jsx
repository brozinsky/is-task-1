import React from 'react'
import img1 from '../../../../assets/2/section-2-1.png'
import arrow from '../../../../assets/arrow.svg'
import WatchCount from '../../../other/WatchCount'

const VodMovie = ({ movie }) => {
    const { tags, name, price } = movie

    return (
        <>
            <img className='vod__img' src={img1} alt="Kapitan Ameryka: Zimowy żołnierz" />
            <div className='vod__container'>

                <div className='vod__container-top'>
                    <h2 className='vod__title'>
                        <span className='vod__title--big'>
                            VOD
                        </span>
                        Video na żądanie
                    </h2>
                </div>

                <div className='vod__container-bottom'>
                    <div className='vod__container-left'>
                        <span className='vod__movie'>{name}</span>
                        <div className='vod__movie-info'>
                            <span className='vod__movie-tags'>{tags}</span>
                            <span className='vod__movie-price'>{price} zł</span>
                        </div>
                    </div>
                    <div className='vod__container-right'>
                        <WatchCount text='Film obejrzy' value={125} />
                    </div>
                </div>
                <img className='vod__arrow' src={arrow} alt="Previous" />
                <img className='vod__arrow vod__arrow--rotate' src={arrow} alt="Next" />
            </div>
        </>
    )
}

export default VodMovie
