import React from 'react'
import '../../Style/Contact/ContactForm.css'

const ContactForm = () => {


    return (
        <>
            <div className="ContactForm_Main_conatainer">
                <div className="ContactForm_Main">
                    <form action='https://formspree.io/f/mdknovno' method='post'>
                        <input type="text" placeholder="USER NAME" name='username' />
                        <input type="text" placeholder='EMAIL' name='email' />
                        <textarea name="massage" id="" placeholder='MESSAGE' ></textarea>
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactForm
