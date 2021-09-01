import React from 'react'
import './AppSection.scss'
import { ReactComponent as AndroidIcon } from '../../../../assets/7/section-7-icon-android.svg'
import { ReactComponent as AppleIcon } from '../../../../assets/7/section-7-icon-apple.svg'
import { ReactComponent as WinIcon } from '../../../../assets/7/section-7-icon-win.svg'

const AppSection = () => {
    const [isHovered, setIsHovered] = React.useState(false)

    const handleHoverIn = () => {
        setIsHovered(true)
    }

    const handleHoverOut = () => {
        setIsHovered(false)
    }

    return (
        <section className="apps sections__low sc-7">
            <div onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut} className="apps__wrapper">
                <h2 className="apps__title">Aplikacja</h2>
                <p className="apps__text">Lorem ipsum dolor sit amet enim. Etiam
                    ullamcorper. Suspendisse a pellentesque
                    dui, non felis.
                    {isHovered
                        ? <span>
                            Maecenas malesuada elit lectus felis, malesuada ultricies.
                            Aliquam erat ac ipsum. Integer aliquam purus.
                            Quisque lorem tortor fringilla sed vestibulum
                        </span>
                        : null}
                </p>
                {isHovered
                    ? <p className="apps__text">
                        Pobierz aplikację na swój telefon.
                        Wybierz system operacyjny:</p>
                    : null}
                <div className="apps__icons">
                    {isHovered ? <AndroidIcon fill='#fff' /> : <AndroidIcon fill='#757575' />}
                    {isHovered ? <AppleIcon fill='#fff' /> : <AppleIcon fill='#757575' />}
                    {isHovered ? <WinIcon fill='#fff' /> : <WinIcon fill='#757575' />}
                </div>
            </div>
        </section>
    )
}

export default AppSection