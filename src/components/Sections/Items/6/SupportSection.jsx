import React from 'react'
import './SupportSection.scss'
import avatar from '../../../../assets/6/section-6.png'
import icon from '../../../../assets/6/section-6-icon.svg'
import arrow from '../../../../assets/arrow.svg'

const SupportSection = () => {
    return (
        <section className='support sections__low sc-6'>
            <div className="support__wrapper">
                <div>
                    <h2 className='support__title'>
                        Nasz support
                    </h2>
                    <span className='support__secondary'>
                        propozycje naszego tv-maniaka
                        na weekend
                    </span>
                </div>
                <div className="support__container">
                    <div className="support__avatar-border">
                        <img className='support__avatar' src={avatar} alt="Avatar" />
                    </div>
                    <div className="support__container-right">
                        <a href='./support' className="support__container-top">
                            <p className="support__container-text">
                                zobacz co kuba
                                znalazł ciekawego
                                w tv na weekend
                            </p>
                            <img className="support__container-arrow" src={arrow} alt="Przejdź" />
                        </a>
                        <hr className="support__container-hr" />
                        <div className="support__container-bot">
                            <p className="support__container-text">
                                podyskutuj z nim
                                o filmach już
                                w piątek 15.09.2014
                            </p>
                            <img className="support__container-icon" src={icon} alt="Porozmawiaj" />
                        </div>
                    </div>
                </div>
                <small className='support__small'>
                    Zostań naszym ekspertem i poprowadź
                    przedweekendowy chat z użytkownikami
                </small>
            </div>
        </section>
    )
}

export default SupportSection
