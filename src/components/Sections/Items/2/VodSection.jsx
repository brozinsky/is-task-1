import React from 'react'
import './VodSection.scss'
import VodMovie from './VodMovie'

const VodSection = () => {
    const [currentMovie,] = React.useState({
        name: 'Kapitan Ameryka: Zimowy żołnierz',
        id: '1',
        tags: 'Nowości - akcja',
        price: '14,00',
    })
    return (
        <section className='vod sc-2'>
            <div className="vod__darken" />
            <VodMovie movie={currentMovie} />
            <button className="vod__button">
                Kup film
            </button>
        </section>
    )
}

export default VodSection