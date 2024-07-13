import React, { useState } from 'react';
import '../../Style/Login/LoginForm.css';
import { AddUser } from '../../Store/Slice/UserLoginData';
import { useDispatch } from 'react-redux';
import { IoEyeSharp } from "react-icons/io5";
import { toast } from 'react-toastify';


const LoginForm = () => {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleCreateAccount = (event) => {
        event.preventDefault();
        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        };
        dispatch(AddUser(formData));
        toast.success(`Wellcome ${firstName} ${lastName}`);

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    return (
        <>
            <div className='CreateAccount_main_container'>
                <div className="CreateAccount_container">
                    <form onSubmit={handleCreateAccount}>
                        <h1>SIGN UP</h1>

                        <div className='CreateAccount_container_2input'>
                            <input type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            <input type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>

                        <div className='CreateAccount_container_input'>
                            <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className='CreateAccount_container_2input'>
                            <input type={showConfirmPassword ? "text" : "password"} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <span className='inputShowPassword'>
                                <IoEyeSharp onClick={togglePasswordVisibility} />
                            </span>
                            <input type={showPassword ? "text" : "password"} placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            <span className='inputShowPassword2'>
                                <IoEyeSharp onClick={toggleConfirmPasswordVisibility} />
                            </span>
                        </div>

                        <div style={{ width: "80%", display: "flex", justifyContent: "flex-end" }}>
                        </div>
                        <button type="submit">SIGN UP</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginForm;
