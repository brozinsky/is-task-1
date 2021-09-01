import React from 'react'
import { ReactComponent as Arrow } from '../../assets/header/header-arrow.svg'

const HeaderMenuOffer = ({ title, tag, price, img }) => {
    return (
        <div className="header__vod">
            <div className="header__nav-wrapper">
                <h3 className="header__title">VOD</h3>
                <p className="header__vod-text">Oglądaj wtedy, gdy masz czas i ochotę</p>
                <hr className="header__nav-hr" />
                <div className="header__vod-movie">
                    <div className="offer">
                        <div className="offer__left">
                            <img src={img} alt={title} />
                        </div>
                        <div className="offer__right">
                            <span className="offer__secondary"> Dziś w promocji</span>
                            <span className="offer__title">{title}</span>
                            <span className="offer__tag"> {tag}</span>
                            <a href='./oferta' className="offer__price">{price} zł
                                <span className="offer__arrow">
                                    <Arrow />
                                </span>
                                kup
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="header__nav-hr" />
            </div>
        </div>
    )
}

export default HeaderMenuOffer