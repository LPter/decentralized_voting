import { useState } from "react";
import Footer from "../components/Footer";
import HeaderPage from "../components/HeaderPage";
import { handleSignup } from "../helpers/handle-signup";
import AlertDialog from "../components/AlertDialog";

function SignupPage() {

    const [passwordInput, setPasswordInput] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const [publicKey, setPublicKey] = useState("")
    function handlePasswordInputChange(event) {
        console.log(passwordInput);
        setPasswordInput(event.target.value)
    }

    async function handleSubmit(event) {
        event.preventDefault();
        await handleSignup(passwordInput)
            .then((result) => {
                setPublicKey(result)
            })
        setIsOpen(!isOpen)
    }

    return ( 
        <>
            <div>
                <HeaderPage />
                <div className="bg-gray-50 dark:bg-gray-900 flex flex-col justify-center mt-0 py-6 sm:px-6 lg:px-8 mb-3">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <a href="/">
                            <img className="mx-auto h-12 w-auto" src={process.env.PUBLIC_URL + '/images/logo.png'} alt="StrawPoll"></img>
                        </a>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
                            Create a free account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                    
                            <a href="/login/" className="link">
                                login in to your account
                            </a>
                        </p>
                    </div>
                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md space-y-8 bg-[#1f2937] border-t-[#818cf8] border-t-[4px] rounded-[0.375rem]">
                        <form action="space-y-6">
                            <div className="px-10 py-3 mt-5">
                                <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900 dark:text-white">
                                    Please enter password for my account
                                </h2>
                            </div>

                            <div className="px-10 py-3">
                                <label htmlFor="password" className="text-white">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input className="inputTag" id="password" name="password" type="password" value={passwordInput} onChange={handlePasswordInputChange} />
                                </div>
                            </div>

                            <div className="my-4 text-center">
                                <button
                                    type="submit"
                                    className="py-2 px-8 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={handleSubmit}
                                >
                                    Sign up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
            {
                isOpen && (
                    <AlertDialog isOpen={isOpen} setIsOpen={setIsOpen} contentHeader="Register successful" content={`This is your public key: ${publicKey}`} buttonOpion="login" />
                )
            }
        </>
    );
}

export default SignupPage;