import React from 'react'
import './Sections.scss'
import SliderSection from './Items/1/SliderSection'
import VodSection from './Items/2/VodSection'
import BundleSection from './Items/3/BundleSection'
import TvSection from './Items/4/TvSection'
import PromoSection from './Items/5/PromoSection'
import SupportSection from './Items/6/SupportSection'
import AppSection from './Items/7/AppSection'

const Sections = () => {
    return (
        <main className="sections">
            <SliderSection />
            <VodSection />
            <BundleSection />
            <TvSection />
            <PromoSection />
            <SupportSection />
            <AppSection />
        </main>
    )
}

export default Sections
