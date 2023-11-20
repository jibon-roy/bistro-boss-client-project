import { Link } from 'react-router-dom';
import image from '../../assets/others/authentication2.png'
import bgImage from '../../assets/others/bg.png'
import { FaGoogle } from 'react-icons/fa6';
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import useAuthContext from '../../hooks/useAuthContext';

const Register = () => {

    const { newUserWithEmailPassword, googleSignIn } = useAuthContext();
    const bgStyle = {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover'
    }

    const loginformSubmit = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const userName = form.name.value;
        const email = form.email.value;
        const photoUrl = form.url.value;
        const password = form.password.value;

        newUserWithEmailPassword(email, password)
            .then(res => {
                if (res.user) {
                    updateProfile(res.user, {
                        displayName: userName,
                        photoURL: photoUrl
                    })
                    Swal.fire({
                        title: "Registration Successful",
                        text: "Great! You have registered.",
                        icon: "success"
                    }).then(location.reload());
                }
            })
            .catch(err => {
                if (err) {
                    Swal.fire({
                        title: "Registration Faild",
                        text: err.message,
                        icon: "error"
                    });
                }
            })
    }


    return (
        <div>
            <section style={bgStyle} className="text-gray-600 flex body-font min-h-[100vh]">

                <form onSubmit={loginformSubmit} style={bgStyle} className='shadow-slate-600 shadow-xl  mx-auto my-20' >
                    <div className="container justify-center mx-auto flex flex-wrap items-center">

                        <div className="lg:w-2/6 md:w-1/2 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                            <h2 className="text-gray-900 text-xl text-center font-bold title-font mb-5">Sign Up</h2>
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" id="name" name="name" required placeholder='Name' className="w-full bg-white rounded border border-gray-300 focus:border-[#d19f54] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" required placeholder='Email' className="w-full bg-white rounded border border-gray-300 focus:border-[#d19f54] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="url" className="leading-7 text-sm text-gray-600">Photo Url</label>
                                <input type="url" id="url" name="url" required placeholder='Photo url' className="w-full bg-white rounded border border-gray-300 focus:border-[#d19f54] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                                <input type="password" id="password" name="password" required placeholder='Password' className="w-full bg-white rounded border border-gray-300 focus:border-[#d19f54] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <button className={`text-white bg-[#d19f54d9] border-0 py-2 px-8 focus:outline-none hover:bg-[#d19f54] rounded text-lg disabled:bg-[#d19f547e]`}>Sign In</button>
                            <p className="text-md text-[#D1A054] mt-3 text-center">Already registered? <Link to='/login'><span className='font-semibold hover:underline hover:text-[#d19f54] visited:text-[#d19f54] focus:text-[#d19f54] active:text-[#d19f54]'> Go to log in.</span></Link></p>
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
                        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                            <img src={image} alt="" />
                        </div>
                    </div>

                </form>
            </section>
        </div>
    );
};

export default Register;