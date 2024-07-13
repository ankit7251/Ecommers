import React from 'react'
import '../../Style/Home/HomeService.css'
import { CiDeliveryTruck } from "react-icons/ci";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { JackInTheBox } from 'react-awesome-reveal';

const HomeService = () => {
    return (
        <>
            <div className="HomeService_main_container">
                <div className="HomeService_main">
                    <div className='HomeService_main_content'>
                        <span><CiDeliveryTruck /></span>
                        <p><JackInTheBox >Super Fast and free Delivery</JackInTheBox></p>
                    </div>
                    <div className='HomeService_main_content HomeService_main_content_center_box'>
                        <div className='HomeService_main_content_center'>
                            <span><MdOutlineSecurity /></span>
                            <p> <JackInTheBox>Non-Contact Shiping</JackInTheBox> </p>
                        </div>
                        <div className='HomeService_main_content_center'>
                            <span><GiReceiveMoney /></span>
                            <p><JackInTheBox>Money-Back Guaranteed</JackInTheBox></p>
                        </div>

                    </div>
                    <div className='HomeService_main_content'>
                        <span>
                            <RiSecurePaymentFill />
                        </span>
                        <p><JackInTheBox>Super Secure Payment Syestem</JackInTheBox></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeService
