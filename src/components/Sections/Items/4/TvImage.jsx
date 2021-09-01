import React from 'react'
import img1 from '../../../../assets/4/section-4-1.png'
import img2 from '../../../../assets/4/section-4-2.png'

const TvImage = ({ activeMovie }) => {
    return (
        <img
            src={{
                1: img1,
                2: img2,
            }[activeMovie.id]
            }
            alt={activeMovie.name} />
    )
}

export default TvImage