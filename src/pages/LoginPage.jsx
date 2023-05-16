import { useContext, useState } from "react";
import Footer from "../components/Footer";
import HeaderPage from "../components/HeaderPage";
import { handleSignin } from "../helpers/handle-signin";
import AuthContext from "../Auth/AuthProvider"
import { useNavigate, useLocation } from "react-router-dom";

function LoginPage() {
    const { setAuth } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [publicKey, setPublicKey] = useState("")
    const [password, setPassword] = useState("")

    function handlePublickeyInputChange(event) {
        setPublicKey(event.target.value)
    }

    function handlePasswordInputChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleSignin(publicKey, password)
            .then((result) => {
                setAuth(result)
                navigate(from, { replace: true });
            })
    }

    return ( 
        <div>
            <HeaderPage />
            <div className="bg-gray-50 dark:bg-gray-900 flex flex-col justify-center mt-0 py-6 sm:px-6 lg:px-8 mb-3">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <a href="/">
                        <img className="mx-auto h-12 w-auto" src={process.env.PUBLIC_URL + '/images/logo.png'} alt="StrawPoll"></img>
                    </a>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
                        Log in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                  
                        <a href="/signup/" className="link">
                            create a free account
                        </a>
                    </p>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md space-y-8 bg-[#1f2937] border-t-[#818cf8] border-t-[4px] rounded-[0.375rem]">
                    <form action="space-y-6">
                        <div className="px-10 py-3 mt-5">
                            <label className="text-white">
                                Public Key
                            </label>
                            <div className="mt-1">
                                <input className="inputTag" id="email" name="email" type="text" required="" onChange={handlePublickeyInputChange}/>
                            </div>
                        </div>

                        <div className="px-10 py-3">
                            <label className="text-white">
                                Password
                            </label>
                            <div className="mt-1">
                                <input className="inputTag" id="password" name="password" type="password" required="" onChange={handlePasswordInputChange}/>
                            </div>
                        </div>

                        <div className="my-4 text-center">
                                <button
                                    type="submit"
                                    className="py-2 px-8 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={handleSubmit}
                                >
                                    Login
                                </button>
                            </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LoginPage;