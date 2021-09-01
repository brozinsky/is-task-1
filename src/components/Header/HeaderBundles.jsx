import React from 'react'
import { ReactComponent as TvIcon } from '../../assets/header/header-tv.svg'
import { ReactComponent as WebIcon } from '../../assets/header/header-web.svg'
import { ReactComponent as PhoneIcon } from '../../assets/header/header-phone.svg'
import { ReactComponent as MobileWebIcon } from '../../assets/header/header-mobile-web.svg'

const HeaderBundles = () => {
    return (
        <div className="header__nav-wrapper">
            <h3 className="header__nav-title">Paczki i pakiety</h3>
            <ul className="header__nav-ul">
                <hr className="header__nav-hr" />
                <li className="header__nav-item"><a href="./telewizja"><TvIcon />&nbsp;telewizja</a></li>
                <hr className="header__nav-hr" />
                <li className="header__nav-item"><a href="./internet"><WebIcon />&nbsp;internet</a></li>
                <hr className="header__nav-hr" />
                <li className="header__nav-item"><a href="./telefon"><PhoneIcon />&nbsp;telefon</a></li>
                <hr className="header__nav-hr" />
                <li className="header__nav-item"><a href="./internet-mobilny"><MobileWebIcon />&nbsp;internet mobilny</a></li>
                <hr className="header__nav-hr" />
            </ul>
        </div>
    )
}

export default HeaderBundles