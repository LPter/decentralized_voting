import { useContext, useState } from "react";
import AuthContext from "../Auth/AuthProvider";
import ButtonUser from './ButtonUser'
import { useNavigate } from "react-router-dom";

function HeaderPage() {
    const { auth, setAuth } = useContext(AuthContext)
    const [ showMenu, setShowMenu] = useState(false)
    const navigate = useNavigate()
    return ( 
        <header className="sticky top-0 z-40 bg-white dark:bg-gray-900  ring-1 ring-gray-300 dark:ring-gray-700 shadow-sm">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex px-2 lg:px-0 truncate">
                        <a href="/" className="flex-shrink-0 flex items-center text-gray-900 dark:text-gray-200">	
                            <img className="text-gray-900 dark:text-white h-6 w-auto mr-2" src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo ..." />    
                        </a>
                        <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                            <a href="/create/" className="border-transparent text-gray-700 dark:text-gray-200 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium whitespace-nowrap">
                                Create Poll
                            </a>
                        </div>
                    </div>
                    {
                        auth.length === 4 ? (
                            <div className="hidden lg:ml-4 lg:flex lg:items-center">
                                <a className="primaryButton" href="/login/">Login</a>
                                <a className="primaryButtonSecond" href="/signup">Sign up</a>
                            </div>
                        ) : (
                            <button className="text-xl my-2">
                                <div onClick={() => setShowMenu(!showMenu)}>
                                    <ButtonUser publicKey={auth}/>
                                </div>
                                {showMenu && (
                                    <div>
                                        <button className="flex flex-col items-center px-4 py-2 border border-transparent rounded-t-xl shadow-sm text-sm font-medium text-white bg-[#2c3c55] hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full"
                                            onClick={() => navigate(`/my-poll/${auth}`)}
                                        >My polls</button>
                                        <button className="flex flex-col items-center px-4 py-2 border border-transparent rounded-b-xl shadow-sm text-sm font-medium text-white bg-[#2c3c55] hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full"
                                            onClick={() => setAuth("null")}
                                        >Logout</button>
                                    </div>
                                )}
                            </button>
                        )
                    }
                    
                </div>
            </div>
        </header>
    );
}

export default HeaderPage;  