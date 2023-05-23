import React, { useContext } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { app } from '../../firebase/firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import useTitle from '../UseHooks/UseTitle';

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()


const Login = () => {
    useTitle('Login')

    const { LoginWithEmail, setUser, password, setPassword, passwordError, setPError, emailError, setEmailError, email, setEmail, rootErr, setRootError } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value

        // Form validation
        if (!email) {
            setPError('')
            setEmailError('Email can not be empty')
            return event.target.email.focus()
        } else if (emailError) {
            setPError('')
            setEmailError(emailError)
            return event.target.email.focus()
        } else if (!password) {
            setEmailError('')
            setPError('Pasword can not be empty')
            return event.target.password.focus()
        }
        else if (passwordError) {
            setEmailError('')
            setPError(passwordError)
            return event.target.password.focus()
        }
        else {
            setEmailError('')
            setPError('')
        }

        //Login with email function by context api
        LoginWithEmail(email, password)
            .then(res => {
                toast.success('login success')
                const emailUser = res.user
                setUser(emailUser);
                navigate(location.state?.pathname || '/', { replace: true })
                event.target.password.value = ''
                event.target.email.value = ""
            })
            .catch(err => {
                setRootError(err.message);
                toast.error(rootErr)
                event.target.password.value = ''
                event.target.email.value = ""
                event.target.email.focus()

            })
    }

    // handleGoogle function
    const handleGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((res) => {
                const loggedUser = res.user
                setUser(loggedUser);
                toast.success('Login Successed')
                navigate(location?.state?.pathname || '/', { replace: true })

            })
            .catch(err => {
                setRootError(err.message)
                toast.error(rootErr)
               // console.log(err.message)
            })
    }

    //  this function is used for instant error giving system
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

    //  this function is used for instant error giving system
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

    return (
        <div className='bg-slate-200 py-6'>
            <div className='flex flex-col md:flex-row gap-4 items-center container mx-auto'>
                <div className='w-1/2 hidden md:block'>
                    <Player
                        src='https://assets4.lottiefiles.com/packages/lf20_2TUV98WaqI.json'
                        className="player"
                        loop
                        style={{ height: '500px' }}
                        autoplay>

                    </Player>
                </div>
                <div className="bg-white shadow-md h-full px-8 pt-6 pb-8 w-full md:w-1/2 rounded-lg">
                    <ToastContainer />
                    <form onSubmit={handleLogin} >
                        <div className=''>
                            <h2 className='font-bold heading-text text-3xl md:text-6xl'>Log In</h2>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                value={email}
                                onChange={handleEmail}
                                placeholder="Enter your email"
                            />
                            {emailError ? <p className='text-red-500'>{emailError}</p> : ''}
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={handlePassword}
                            />
                            {passwordError ? <p className='text-red-500'>{passwordError}</p> : ''}
                        </div>

                        <button className="bg-emerald-700 hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Log In</button>

                        <div className='flex flex-col md:flex-row my-3 gap-2 items-center'>

                            <p >New Here?</p>
                            <Link className='btn btn-link' to='/register' state={location.state}>Register now</Link>
                        </div>


                        <div onClick={handleGoogle} className='cursor-pointer w-full md:w-1/2 btn flex items-center gap-3 rounded-xl border-2 bg-white shadow-lg p-3 text-red-500 text-2xl'>
                            <FaGoogle></FaGoogle>
                            <p className='text-sm'>Log in with Google</p>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;
