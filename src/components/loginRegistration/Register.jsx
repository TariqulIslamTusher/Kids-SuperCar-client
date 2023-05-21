import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { Player } from '@lottiefiles/react-lottie-player';
import { ToastContainer, toast } from 'react-toastify';
import useTitle from '../UseHooks/UseTitle';


const Register = () => {
    useTitle('Register')

    const { createAcctWithEmail, setUser, password, setPassword, passwordError, setPError, emailError, setEmailError, email, setEmail, setRootError } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [nameErr, setNameErr] = useState('')
    const [urlErr, setUrl] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const Url = e.target.url.value
        const email = e.target.email.value
        const password = e.target.password.value

        // validation portion
        if (!name) {
            e.target.name.focus()
            setUrl('')
            setEmailError('')
            setPError('')
            return setNameErr('Name can not be empty')
        }
        else if (!Url) {
            e.target.url.focus()
            setNameErr('')
            setPError('')
            setUrl('')
            return setUrl('Url input can not be empty')
        } else if (!email) {
            setUrl('')
            setNameErr('')
            setPError('')
            setEmailError('Email can not be empty')
            return e.target.email.focus()
        } else if (emailError) {
            setUrl('')
            setNameErr('')
            setPError('')
            setEmailError(emailError)
            return e.target.email.focus()
        } else if (!password) {
            setNameErr('')
            setUrl('')
            setEmailError('')
            setPError('Pasword can not be empty')
            return e.target.password.focus()
        }
        else if (passwordError) {
            setNameErr('')
            setUrl('')
            setEmailError('')
            setPError(passwordError)
            return e.target.password.focus()
        }
        else {
            setNameErr('')
            setUrl('')
            setEmailError('')
            setPError('')

        }


        // Photo and url updating function
        const updatePhotoAndUrl = (user) => {
            return updateProfile(user, { displayName: name, photoURL: Url })
        }


        // creating user with email
        createAcctWithEmail(email, password)
            .then(res => {
                toast.info('registration success')
                const loggedUser = res.user;
                // calling the photo and url updating function
                updatePhotoAndUrl(loggedUser)
                    .then(() => {
                        toast.success('success')
                    })
                    .catch((error) => {
                        console.log(error.message);
                        setRootError(error.message);
                    });
                setUser(loggedUser);
                navigate(location?.state?.pathname || '/', { replace: true })
            })
            .catch(err => {
                setRootError(err.message);
                toast.error(err.message)
            })
    }



    //password validation with regex
    const handlePassword = (e) => {
        const passwordInput = e.target.value

        if (passwordInput.length === 0) {
            setPError('')
        }
        else if (passwordInput.length < 6) {
            setPError('Password must be at least 6 caracters')
        }
        else {
            setPError('')
        }
        setPassword(e.target.value)
    }
    //email validation with regex
    const handleEmail = (e) => {
        const emailInput = e.target.value
        setEmail(emailInput)
        if (emailInput.length === 0) {
            setEmailError('')
        }
        else if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailInput)) {
            setEmailError('Please input a valid Email')
        }
        else {
            setEmailError('')
        }
    }

    return (
        <div className='bg-slate-200 py-6'>
            <div className='flex flex-col md:flex-row gap-4 items-center container mx-auto'>
                <div className='w-1/2 hidden md:block'>
                    <Player
                        src='https://assets4.lottiefiles.com/packages/lf20_UW8DlCRljO.json'
                        className="player"
                        loop
                        style={{ height: '500px' }}
                        autoplay>

                    </Player>
                </div>
                {/* registration form part */}

                <div className='container md:w-1/2 mx-auto'>

                    <form onSubmit={handleSubmit} className="shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-blue-200 bg-white">
                        <div className='text-center mb-6'>
                            <h2 className='font-bold bg-gradient-to-r bg-clip-text text-transparent from-violet-900 to-violet-700 text-2xl md:text-5xl'>Register Here</h2>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="name"
                                type="text"

                                placeholder="Your Name"
                            />
                            {nameErr ? <p className='text-red-500'>{nameErr}</p> : ''}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="url">
                                Photo Url
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="url"
                                type="text"
                                placeholder="https://imbb.food.png"
                            />
                            {urlErr ? <p className='text-red-500'>{urlErr}</p> : ''}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="email"
                                type="email"
                                value={email}
                                onChange={handleEmail}
                                placeholder="Enter Your email"
                            />
                            {emailError ? <p className='text-red-500'>{emailError}</p> : ''}

                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="password"
                                type="password"
                                value={password}
                                onChange={handlePassword}
                                placeholder="Password"
                            />
                            {passwordError ? <p className='text-red-500'>{passwordError}</p> : ''}
                        </div>

                        <button className="bg-violet-700 hover:bg-violet-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Register</button>


                        <div className="flex items-center">
                            <p className='my-3'>Already have an account?</p>
                            <Link className='btn btn-link' to='/login'>Log In</Link>
                        </div>

                        <ToastContainer />

                    </form>
                </div>
            </div>
        </div>

    );
};

export default Register;