import React from 'react'

const MenuItem = ({ url, title }) => {
    return (
        <li>
            <a className="footer__menu-item" href={url}>{title}</a>
        </li>
    )
}

export default MenuItem
