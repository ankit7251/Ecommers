import React from 'react'
import '../../Style/Home/HomeTrustedCompany.css'
import { IoLogoAmazon } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { FaMaxcdn } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoApple } from "react-icons/io5";
import { BiLogoAws } from "react-icons/bi";
import { BiLogoInternetExplorer } from "react-icons/bi";
import { Bounce, JackInTheBox } from 'react-awesome-reveal';
const HomeTrustedCompany = () => {
    return (
        <>
            <div className="HomeTrustedCompany_main_container">
                <div className="HomeTrustedCompany_main">
                    <div className='HomeTrustedCompany_main_details'>
                        <p><JackInTheBox>Trusted By 1000+ Companies</JackInTheBox></p>
                    </div>
                    <div className='HomeTrustedCompany_Logo'>
                        <span><Bounce><IoLogoAmazon /></Bounce></span>
                        <span><Bounce><FaGoogle /></Bounce></span>
                        <span><Bounce><FaMaxcdn /></Bounce></span>
                        <span><Bounce><IoLogoTwitter /></Bounce></span>
                        <span><Bounce><IoLogoApple /></Bounce></span>
                        <span><Bounce><BiLogoAws /></Bounce></span>
                        <span><Bounce><BiLogoInternetExplorer /></Bounce></span>

                    </div>
                </div>

            </div>
            <div className="space"></div>
        </>
    )
}

export default HomeTrustedCompany
