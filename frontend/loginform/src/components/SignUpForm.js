import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignUpForm(props) {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [errorMessages, setErrorMessages] = useState([]);
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const initialFormState = {
        Name: '',
        Email: '',
        Password: '',
        ConfirmPassword: '',
    };

    const [values1, setValues1] = useState(initialFormState);

    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            const formData = {
                email: values.email,
                password: values.password,
            }
            const { data } = await axios.post('http://localhost:3000/auth/login', formData);

            if (data.status === parseInt('401')) {
                setErrorMessages(data.response)
            } else {
                props.updateIsAuthenticated(true);
                navigate('/home');
            }

        } catch (error) {
            console.log(error);
        }

    }

    const handleSignup = async (e) => {
        try {
            e.preventDefault();
            setPassword(values1.Password);

            const formData = {
                firstName: values1.Name,
                email: values1.Email,
                password: values1.Password,
                lastName: 'Ali',
            }
            //Validate password
            const validationErrors = validatePassword(values1.Password);
            setErrorMessages(validationErrors);
            if (validationErrors.length > 0) {
                return;
            }            
            const { data } = await axios.post('http://localhost:3000/user/create', formData);
            if (data.status === parseInt('401')) {
                setErrorMessages(data.response)
            } else {
                setSuccessMessage('User created successfully');
            }

        } catch (error) {
            console.log(error);
        }
    }

    const handleChangesLogin = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleChanges = (e) => {
        setValues1({
            ...values1,
            [e.target.name]: e.target.value
        })
    }

    // Function to validate the password based on criteria
    const validatePassword = (password) => {
        const validationErrors = [];

        if (password.length < 8) {
            validationErrors.push("Password must be at least 8 characters long");
        }
        if (!/[A-Z]/.test(password)) {
            validationErrors.push("Password must contain at least one uppercase letter");
        }
        if (!/[a-z]/.test(password)) {
            validationErrors.push("Password must contain at least one lowercase letter");
        }
        if (!/[0-9]/.test(password)) {
            validationErrors.push("Password must contain at least one number");
        }
        if (!/[!@#$%^&*]/.test(password)) {
            validationErrors.push("Password must contain at least one special character (!@#$%^&*)");
        }

        return validationErrors;
    };

    return (
        <div className='container'>
            <div className='form-container'>
                <div className='form-toggle'>
                    <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>Login</button>
                    <button className={!isLogin ? 'active' : ""} onClick={() => { setIsLogin(false); setValues(initialFormState) }}>Signup</button>
                </div>
                {isLogin ? <>
                    <form id='1' className='form' onSubmit={handleLogin}>
                        <h2>Login Form</h2>
                        <input type='email' name='email' placeholder='Email' onChange={(e) => { handleChangesLogin(e) }} />
                        <input type='password' name='password' placeholder='Password' onChange={(e) => { handleChangesLogin(e) }} />
                        <button type='submit'>Login</button>
                        <p>Don't have an account? <a href='#' onClick={() => setIsLogin(false)}>Signup now</a></p>
                    </form>
                </> : <>
                    <form id='2' className='form' onSubmit={handleSignup}>
                        <h2>Sign Up Form</h2>
                        <input type='text' name='Name' placeholder='Name' onChange={(e) => { handleChanges(e) }} />
                        <input type='email' name='Email' placeholder='Email' onChange={(e) => { handleChanges(e) }} />
                        <input type='password' name='Password' placeholder='Password' onChange={(e) => { handleChanges(e) }} />
                        <input type='password' name='Confirm Password' placeholder='Confirm Password' onChange={(e) => { handleChanges(e) }} />
                        {/* Populate Error Messages if any */}
                        <div style={{ color: 'red' }}>
                            {errorMessages.length > 0 && (
                                <ul>
                                    {errorMessages.map((error, index) => (
                                        <li key={index}>{error}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <button type='submit'>Signup</button>
                        {successMessage && (
                            <div
                                style={{
                                    marginTop: '20px',
                                    padding: '10px',
                                    border: '1px solid green',
                                    borderRadius: '5px',
                                    color: 'green',
                                    backgroundColor: '#e6ffee',
                                    width: 'fit-content',
                                    margin: '20px auto',
                                }}
                            >
                                {successMessage}
                            </div>
                        )}
                    </form>
                </>}

            </div>
        </div>
    )
}