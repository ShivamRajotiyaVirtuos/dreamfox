import React from 'react'
import Team from "@/components/About/Team";
import BannerSection from '@/components/About/BannerSection';
import CultureValuesSection from '@/components/About/CultureValuesSection';
import Mission from '@/components/About/Mission';
import StackingCards from '@/components/About/Timeline';
import DreamFoxModel from '@/components/About/DreamFoxModel';


function Index() {
    return (
        <div>
            <BannerSection/>
            <StackingCards/>
            <DreamFoxModel/>
            <Mission/>
            <Team/>
            <CultureValuesSection/>
        </div>
    )
}

export default Index
