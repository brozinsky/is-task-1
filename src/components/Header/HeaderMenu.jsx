import React from 'react'
import movieImg from '../../assets/header/header-movie.png'
import HeaderMenuOffer from './HeaderMenuOffer'
import HeaderBundles from './HeaderBundles'

const HeaderMenu = () => {
    return (
        <nav className="header__nav">
            <HeaderBundles />
            <HeaderMenuOffer title='Ocalony' tag='Dramat' price='5,00' img={movieImg} />
            <div className="header__nav-wrapper">
                <div className="header__tv">
                    <h3 className="header__title">TV ONLINE</h3>
                    <p>Oglądaj telewizję przez internet na czym chcesz: komputer, tablet, telefon</p>
                </div>
            </div>
        </nav>
    )
}

export default HeaderMenu
