import React from 'react'
import './BundleSection.scss'
import BundleItem from './BundleItem';
import icon1 from '../../../../assets/3/section-3-icon-1.svg'
import icon2 from '../../../../assets/3/section-3-icon-2.svg'
import icon3 from '../../../../assets/3/section-3-icon-3.svg'
import icon4 from '../../../../assets/3/section-3-icon-4.svg'

const items = [
    { id: 1, icon: icon1, text: 'Ulubione kanały tv', isPlus: false },
    { id: 2, icon: icon2, text: 'Prędkość internetu', isPlus: true },
    { id: 3, icon: icon3, text: 'Ilość minut na rozmowy', isPlus: true },
    { id: 4, icon: icon4, text: 'Internet mobilny', isPlus: true },
]

const BundleSection = () => {
    return (
        <section className='bundle sections__col-2 sections__med sc-3'>
            <div className="bundle__wrapper">
                <div className="bundle__top">
                    <h2 className="bundle__title">
                        Stwórz swój własny pakiet
                    </h2>
                    <span className="bundle__secondary">
                        Telewizja - internet - telefon
                    </span>
                </div>
                <div className="icon-container">
                    {items.map(({ id, icon, text, isPlus }) => {
                        return <BundleItem key={id}
                            icon={icon}
                            text={text}
                            isPlus={isPlus} />
                    })}
                </div>
                <div className="bundle__bottom">
                    <button className="bundle__button">
                        Stwórz pakiet
                    </button>
                    <span className="bundle__button-info">
                        lub wybierz pakiet, przygotowany przez nas
                    </span>
                </div>
            </div>
        </section>
    )
}

export default BundleSection
