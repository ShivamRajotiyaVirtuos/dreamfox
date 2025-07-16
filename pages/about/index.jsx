import React from 'react'
import Team from "@/components/About/Team";
import BannerSection from '@/components/About/BannerSection';
import CultureValuesSection from '@/components/About/CultureValuesSection';
import Mission from '@/components/About/Mission';


function Index() {
    return (
        <div>
            <BannerSection/>
            <Mission/>
            <Team/>
            <CultureValuesSection/>
        </div>
    )
}

export default Index
