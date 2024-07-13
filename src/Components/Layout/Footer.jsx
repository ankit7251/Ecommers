import React from 'react'
import '../../Style/Layout/Footer.css'
import { IoLogoInstagram } from "react-icons/io";
import { FiYoutube } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
const Footer = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='Footer'>
                <div className="footer_Main_container">
                    <div className="Footer_GetReady_Box">
                        <div className="Footer_GetReady_Box_text">
                            <p>Ready to get started?</p>
                            <p>Shoping</p>
                        </div>
                        <div className="Footer_GetReady_Box_text Footer_GetReady_Box_button">
                            <button onClick={() => navigate('/product')}>GET STARTED</button>
                        </div>
                    </div>
                    <div className="Footer_Container">
                        <div className="Footer_container_details_container">
                            <div className='Footer_container_details_box'>
                                <h4>Yaho baba</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className='Footer_container_details_box'>
                                <h4>Subscribe to get important update</h4>
                                <input type="email" placeholder='Your Email' />
                                <button>SUBSCRIBE</button>
                            </div>
                            <div className='Footer_container_details_box' >
                                <h4 className='mobile_responce'>Follow us</h4>
                                <div className='Footer_container_details_box_icon'>
                                    <IoLogoInstagram />
                                    <FiYoutube />
                                    <AiOutlineWhatsApp />
                                </div>
                            </div>
                            <div className='Footer_container_details_box'>
                                <h4>Call us</h4>
                                <p>+91 1234567890</p>
                            </div>
                        </div>
                    </div>
                    <hr style={{ width: "100%" }} />
                </div>
                <div className="Footer_Bottum_details">
                    <div className="Footer_bottum_details_main">
                        <div className='footer_copy_box'>
                            <p>@2024 MyStore All Rights Reserved</p>
                        </div>
                        <div className='footer_copy_box'>
                            <p>PRIVACY POLICY</p>
                            <p> TERMS & CONDITIONS</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
