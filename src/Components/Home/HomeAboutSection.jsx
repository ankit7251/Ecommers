import React from 'react'
import '../../Style/Home/HomeAboutSection.css'
import { Bounce, Fade } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';
const HomeAboutSection = ({ myData }) => {
    const navigate = useNavigate();
    const { name } = myData;
    return (
        <>
            <div className="HomeAboutSection_main_container">
                <div className="HomeAboutSection_main">
                    <div className="HomeAboutSection_data">
                        <div>
                            <p>WELCOME TO</p>
                            <h1><Bounce>{name}</Bounce></h1>
                        </div>
                        <p><Fade duration={2000}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate nihil, odio, consectetur iste quos labore eius aut modi tempore quia voluptatibus saepe quod quasi dolorum incidunt recusandae sequi culpa nesciunt. </Fade>
                        </p>
                        <button onClick={() => navigate('/product')}>SHOP NOW</button>
                    </div>

                    <div className="HomeAboutSection_Image">
                        <div className='HomeAboutSection_Image_background_desion'></div>
                        <div className='HomeAboutSection_Image_div'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeAboutSection
