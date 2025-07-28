import BannerSection from '@/components/DigitalMarketing/BannerSection'
import Funnel from '@/components/DigitalMarketing/Funnel'
import MetricSection from '@/components/DigitalMarketing/MetricSection'
import PersonaGrid from '@/components/DigitalMarketing/PersonaGrid'
import React from 'react'

function Index() {
    return (
        <div>
            <BannerSection/>
            <PersonaGrid/>
            <MetricSection/>
            <Funnel/>

            {/* <BannerSection/> */}
        </div>
    )
}

export default Index
