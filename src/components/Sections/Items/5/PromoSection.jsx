import React from 'react'
import './PromoSection.scss'

const promoItems = [
    { id: 1, text: 'oglądaj filmy umieszczone w sieci' },
    { id: 2, text: 'ściągaj duże pliki' },
    { id: 3, text: 'korzystaj z poczty, komunikatora' },
    { id: 4, text: 'surfuj swobodnie' },
]

const PromoSection = () => {
    return (
        <section className="promo sections__low sc-5">
            <div className="promo__wrap sections__wrapper">
                <div>
                    <h2 className="promo__title">Pakiet 20 GB LTE</h2>
                    <span className="promo__secondary">Promocja</span>
                </div>
                <p className="promo__info">
                    Dla tych, którzy nie wyobrażają sobie życia
                    bez Internetu:
                </p>
                <ul className="promo__ul">
                    {promoItems.map(({ id, text }) => {
                        return <li key={id} className="promo__item">{text}</li>

                    })}
                </ul>
                <div className="promo__container">
                    <div className="promo__container-left">
                        <span>swoboda i mobilność za</span>
                    </div>
                    <div className="promo__price">
                        50<span className="promo__price-small">zł</span>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default PromoSection
