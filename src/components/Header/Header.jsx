import React from 'react'
import './Header.scss'
import { ReactComponent as BurgerIcon } from '../../assets/header/header-burger.svg';
import HeaderMenu from './HeaderMenu'
import HeaderInfo from './HeaderInfo'

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className="header">
            <div className="header__wrap">
                <button onClick={handleClick}
                    className="header__menu">
                    <BurgerIcon />
                </button>
                {isOpen
                    ? <HeaderMenu />
                    : null
                }
                <HeaderInfo />
            </div>
        </header>
    )
}

export default Header