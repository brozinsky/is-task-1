import React from 'react'
import { ReactComponent as TwitterIcon } from '../../assets/footer/footer-icon-twitter.svg'
import { ReactComponent as YtIcon } from '../../assets/footer/footer-icon-yt.svg'
import { ReactComponent as FbIcon } from '../../assets/footer/footer-icon-fb.svg'
import { ReactComponent as PhoneIcon } from '../../assets/footer/footer-icon-phone.svg'
import { ReactComponent as MobileIcon } from '../../assets/footer/footer-icon-mobile.svg'
import { ReactComponent as AppIcon } from '../../assets/footer/footer-icon-app.svg'
import MenuItem from './MenuItem'
import './Footer.scss'

const menuItems = [
    { id: 1, url: './o-nas', title: 'O nas' },
    { id: 2, url: './kontakt', title: 'Kontakt' },
    { id: 3, url: './kariera', title: 'Kariera' },
    { id: 4, url: './dla-mediow', title: 'Dla mediów' },
]

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__wrapper">

                <div className="footer__main">

                    <div className="footer__top">
                        <div className="footer__left">
                            <h3 className="footer__title">Aplikacja vectra</h3>
                            <div className="footer__app-container">
                                <AppIcon />
                                &nbsp;
                                <span className="footer__purple">
                                    Pobierz
                                    <span className="footer__big">
                                        Aplikację
                                    </span>
                                </span>
                            </div>
                        </div>

                        <div className="footer__right">
                            <span className="footer__title">Infolinia sprzedażowa</span>
                            <span className="footer__green">
                                Zadzwoń lub wyślij sms
                            </span>
                            <span className="footer__green footer__big">
                                <PhoneIcon />
                                &nbsp;
                                <MobileIcon />
                                &nbsp;
                                601 601 601
                            </span>
                            <small className="footer__small">
                                (wg stawek operatorów)
                            </small>
                        </div>
                    </div>

                    <hr className="footer__hr" />
                    <nav className="footer__menu">
                        <ul className="footer__menu-ul">
                            {menuItems.map(({ id, url, title }) => {
                                return <MenuItem key={id} url={url} title={title} />
                            })}
                        </ul>

                        <ul className="footer__menu-ul footer__social">
                            <li> <a href='https://twitter.com/'><TwitterIcon /></a></li>
                            <li> <a href='https://www.youtube.com/'><YtIcon /></a></li>
                            <li> <a href='https://www.facebook.com/'><FbIcon /></a></li>
                        </ul>
                    </nav>
                </div>

                <div className="footer__side">
                    <span className="footer__title">Centrum obsługi klienta</span>
                    <span className="footer__green">Zadzwoń</span>
                    <span className="footer__green footer__big"><PhoneIcon />&nbsp;800 080 800</span>
                    <span className="footer__subtitle">Z telefonu komórkowego</span>
                    <span className="footer__green footer__mid">58 500 65 00</span>
                    <small className="footer__small">(wg stawek operatorów)</small>
                </div>

            </div>
        </footer>
    )
}

export default Footer
