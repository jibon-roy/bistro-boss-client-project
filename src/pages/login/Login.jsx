import { Link } from 'react-router-dom';
import image from '../../assets/others/authentication2.png'
import bgImage from '../../assets/others/bg.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from 'react';
import { FaGoogle } from 'react-icons/fa6';
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import useAuthContext from '../../hooks/useAuthContext';

const Login = () => {
    const captchaRef = useRef();
    const [activeBtn, setActiveBtn] = useState(true);
    const { googleSignIn } = useAuthContext()

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const bgStyle = {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover'
    }

    const loginformSubmit = (e) => {
        e.preventDefault();
    }

    const doSubmit = () => {

        let captcha = captchaRef.current.value;
        console.log(captcha)

        if (validateCaptcha(captcha) == true) {
            setActiveBtn(false)
        }

        else {
            setActiveBtn(true)
        }
    };

    return (
        <div>
            <section style={bgStyle} className="text-gray-600 flex body-font min-h-[100vh]">

                <form onSubmit={loginformSubmit} style={bgStyle} className='shadow-slate-600 shadow-xl  mx-auto my-20' >
                    <div className="container justify-center mx-auto flex flex-wrap items-center">
                        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                            <img src={image} alt="" />
                        </div>
                        <div className="lg:w-2/6 md:w-1/2 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                            <h2 className="text-gray-900 text-xl text-center font-bold title-font mb-5">Login</h2>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" placeholder='Email' className="w-full bg-white rounded border border-gray-300 focus:border-[#d19f54] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                                <input type="password" id="password" name="password" placeholder='Password' className="w-full bg-white rounded border border-gray-300 focus:border-[#d19f54] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="captcha" className="leading-7 text-sm text-gray-600">
                                    <LoadCanvasTemplate />
                                </label>

                                <div className="col mt-3">
                                    <div><input
                                        ref={captchaRef}
                                        className='w-full bg-white rounded border border-gray-300 focus:border-[#d19f54] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                                        placeholder="Enter Captcha Value" id="captcha" name="captcha" type="text"></input></div>
                                </div>

                                <div className="col mt-3 h-10">
                                    <div><button className="text-center w-full border rounded font-medium border-stone-400 border-solid bg-slate-200 mb-3 active:w-[97%] mx-auto block active:text-[97%] hover:bg-slate-300" onClick={doSubmit}>Valid Captcha</button></div>
                                </div>

                            </div>
                            <button disabled={activeBtn} className={`text-white bg-[#d19f54d9] border-0 py-2 px-8 focus:outline-none hover:bg-[#d19f54] rounded text-lg disabled:bg-[#d19f547e]`}>Sign In</button>
                            <p className="text-md text-[#D1A054] mt-3 text-center">New here? <Link to='/register'><span className='font-semibold hover:underline hover:text-[#d19f54] visited:text-[#d19f54] focus:text-[#d19f54] active:text-[#d19f54]'> Create an Account.</span></Link></p>
                            <p className='text-center font-medium'>Or sign in with</p>
                            <div className='grid text-xl grid-cols-3 w-32 gap-2 mx-auto mt-2'>
                                <button className='border rounded-full border-solid p-2 border-stone-600'>
                                    <FaFacebookF></FaFacebookF>
                                </button>
                                <button onClick={googleSignIn} className='border rounded-full border-solid p-2 border-stone-600'>
                                    <FaGoogle></FaGoogle>
                                </button>
                                <button className='border rounded-full border-solid p-2 border-stone-600'>
                                    <FaGithub></FaGithub>
                                </button>
                            </div>
                        </div>
                    </div>

                </form>
            </section>
        </div>
    );
};

export default Login;