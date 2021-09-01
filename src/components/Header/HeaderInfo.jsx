import React from 'react'
import { ReactComponent as PhoneIcon } from '../../assets/icon-phone.svg';
import { ReactComponent as UserIcon } from '../../assets/header/header-user.svg';
import { ReactComponent as SearchIcon } from '../../assets/header/header-search.svg';

const HeaderInfo = () => {
    return (
        <div className="header__right">
            <span className="header__span">Centrum obsługi klienta</span>
            <span className="header__green"><PhoneIcon />&nbsp;800 080 800</span>
            <hr className="header__hr" />
            <a href="./szukaj"><SearchIcon />&nbsp;
                <span className="header__span">Szukaj</span>
            </a>
            <hr className="header__hr" />
            <a href="./strefa-abonanta"> <UserIcon />&nbsp;
                <span className="header__span">Strefa abonanta</span>
            </a>
        </div>
    )
}

export default HeaderInfo
