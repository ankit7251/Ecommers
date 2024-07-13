import React from 'react'
import '../..//Style/Contact/ComtactMap.css'
import { Bounce } from 'react-awesome-reveal'

const ContactMap = () => {
    return (
        <>
            <div className="ContactMap_Main_ConTainer">
                <div className="ContactMap_Main">
                    <div>
                        <h2><Bounce>Feel Free To Contact Us</Bounce></h2>
                    </div>

                    <div className='ContactMap_Map'>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.58771513977!2d77.93473230407021!3d30.32555080692482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1720425764086!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: "0" }}
                            allowfullscreen=""
                            referrerpolicy="no-referrer-when-downgrade"></iframe>






                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactMap
