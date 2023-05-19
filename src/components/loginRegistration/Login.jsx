import React, { useContext } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { app } from '../../firebase/firebase.init';
import { ToastContainer, toast } from 'react-toastify';

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const Login = () => {

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
                console.log(err.message)
            })
    }

    // handle github function
    const handleGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then((res) => {
                const loggedUser = res.user
                setUser(loggedUser);
                toast.success('Login Successed')
                navigate(location.state?.pathname || '/', { replace: true })
            })
            .catch(err => {
                console.log(err.message)
                setRootError(err.message)
                toast.error(rootErr)
            })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        handleGoogleLogin(googleProvider)
            .then(result => {
                console.log(result.user);
            })
            .catch(err => console.log(err.message))
    };

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
        <div className='flex flex-col md:flex-row gap-4 items-center container mx-auto my-5'>
            <div className='w-1/2'>
                <Player
                    src='https://assets4.lottiefiles.com/packages/lf20_2TUV98WaqI.json'
                    className="player"
                    loop
                    style={{ height: '500px' }}
                    autoplay>

                </Player>
            </div>
            <div className="bg-white shadow-md h-full rounded px-8 pt-6 pb-8 mb-4 w-1/2">
                <ToastContainer />
                <form onSubmit={handleLogin} >
                    <div className='text-center mb-6'>
                        <h2 className='font-bold heading-text'>Log In</h2>
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

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Log In</button>

                    <div className='flex flex-col md:flex-row my-3 gap-2'>

                        <p >New Here?</p>
                        <Link className='text-red-800 font-bold' to='/register' state={location.state}>Register now</Link>
                    </div>
                    <div className='flex gap-3 flex-col md:flex-row items-center'>

                        <div onClick={handleGoogle} className='cursor-pointer flex items-center gap-3 rounded-xl border-2 bg-white shadow-lg p-3 text-[#ff781e] text-2xl'>
                            <FaGoogle className='mx-auto'></FaGoogle>
                            <p className='text-sm'>Log in with Google</p>
                        </div>
                        <div onClick={handleGithub} className='rounded-xl cursor-pointer flex items-center gap-3 border-2 bg-white shadow-lg p-3 text-slate-700 text-2xl'>
                            <FaGithub className='mx-auto'></FaGithub>
                            <p className='text-sm'>Log in with Github</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Login;
