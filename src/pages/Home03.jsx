import React from 'react';
import { useEffect } from 'react';
import Header from '../components/header/Header';
import heroSliderData from '../assets/fake-data/data-slider-3';
import Slider from '../components/slider/Slider';
import LastCreate from '../components/layouts/home-3/lastCreate';
import newCreate from '../components/layouts/home-3/newCreate';
import Introduction from '../components/layouts/home-3/Introduction';
import Tokenomics from '../components/layouts/home-3/Tokenomics';
import CrazyZooNFTs from '../components/layouts/home-3/CrazyZooNFTs';
import Partners from '../components/layouts/home-3/Partners';
import LastPartners from '../components/layouts/home-3/lastPartners';
import Community from '../components/layouts/home-3/Community';
import LandingPageFooter from '../components/layouts/home-3/LandingPageFooter';
import NFTsMintingIntro from '../components/layouts/home-3/NFTsSection';
import { GetMinimumInvestment } from '../hooks/main/getMinimumInvestment';
import { usdcTokenAddress } from '../hooks/main/abi';
import { GetTokenDecimals } from '../hooks/main/getTokenDecimals';


const Home03 = () => {
    const decimals = GetTokenDecimals(usdcTokenAddress);
    const minimumInvestment = GetMinimumInvestment();

    useEffect(() => {
    console.log("Decimals:", (decimals))
    console.log("Minimum Investment:", (minimumInvestment))
    },[decimals, minimumInvestment])

    console.log("hello world")

    useEffect(()=>{
        document.body.style.overflow = "auto";
    })

    return (
        <div className='home-3'>
            <Header />
            
            <Slider data={heroSliderData} />
            <div className='gradientWrapper'>
            <div className="blackSeperator"></div>
            <LastCreate />
                <NFTsMintingIntro />
                <Tokenomics />
                <LastPartners />
            </div>
            
            <Community/>
            <LandingPageFooter />
        </div>
    );
}

export default Home03;
