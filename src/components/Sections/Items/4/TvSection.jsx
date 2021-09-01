import React from 'react'
import './TvSection.scss'
import WatchCount from '../../../other/WatchCount'
import TvSlider from './TvSlider'

const TvSection = () => {
    return (
        <section className='tv sections__med sc-4'>
            <div className="sections__wrapper">
                <div className="tv__top">
                    <div className="tv__top-left">
                        <h2>Teraz <br /> w tv online</h2>
                    </div>
                    <div className="tv__top-right">
                        <WatchCount text='Teraz ogląda' value={258} />
                    </div>
                </div>
            </div>
            <TvSlider />
        </section>
    )
}

export default TvSection
