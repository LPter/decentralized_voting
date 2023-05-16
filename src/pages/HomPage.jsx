import Footer from "../components/Footer";
import HeaderPage from "../components/HeaderPage";

function HomePage() {
    return ( 
        <div>
            <HeaderPage />
            <div className="flex-auto">
                <div className="relative sm:mt-8 mb-10">
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100 dark:bg-gray-900"></div>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden bg-indigo-50 dark:bg-gray-900">
                            <div className="hidden sm:block absolute inset-0">
                                <img src={process.env.PUBLIC_URL + '/images/voting.jpg'} className="h-full w-full object-cover" alt="something"></img>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 dark:from-indigo-400 dark:to-indigo-400 mix-blend-multiply"></div>
                            </div>
                            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:pt-28 lg:pb-32 lg:px-8">
                                <h1 className="text-center sm:text-left text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl sm:ml-12">
                                    <span className="block text-gray-900 dark:text-gray-200 sm:text-white sm:dark:text-white">Create your poll</span>
                                    <span className="block text-indigo-700 dark:text-indigo-300 sm:text-indigo-300">in seconds</span>
                                </h1>
                                <p className="mt-6 max-w-sm mx-auto sm:ml-12 text-center sm:text-left text-lg sm:text-xl text-gray-900 dark:text-gray-500 sm:dark:text-indigo-200 sm:text-indigo-200 sm:max-w-2xl">
                                    Want to ask your friends where to go friday night or arrange a meeting with co-workers? Create a poll - and get answers in no time.
                                </p>
                                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-begin">
                                    <div className="space-y-4 sm:space-y-0 sm:ml-12 sm:inline-grid sm:grid-cols-2">
                                        <a href="/create/" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600 sm:text-indigo-700 sm:bg-white sm:dark:bg-white sm:hover:bg-indigo-50 sm:dark:hover:bg-indigo-50 sm:px-8">
                                            Create a poll
                                        </a>
                                        <a href="/" className="ml-0 sm:ml-5 flex items-center justify-center px-4 py-3 text-base font-medium rounded-md text-indigo-700 border border-indigo-700 dark:text-indigo-400 dark:border-indigo-400 hover:bg-indigo-100 dark:hover:bg-gray-800 bg-transparent sm:border-transparent sm:dark:border-transparent sm:text-white sm:bg-indigo-500 sm:hover:bg-indigo-600 sm:dark:text-white dark:sm:hover:bg-indigo-600 sm:px-8">
                                            View examples
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-800 to-indigo-700 dark:from-gray-700 dark:to-gray-700">
                    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
                        <h2 className="text-4xl font-extrabold tracking-tight text-white dark:text-gray-200 sm:text-4xl">
                            <span className="block">Ready to get started?</span>
                            <span className="block text-indigo-400">It's free!</span>
                        </h2>
                        <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
                            <a href="/create" className="inline-flex items-center justify-center border border-transparent font-medium rounded-md shadow-sm text-indigo-800 bg-indigo-50 hover:bg-indigo-100 w-full sm:w-auto px-4 py-3 text-base">
                                <span className="relative flex items-center justify-center">
                                    <template x-if="false">
                                        <div className="flex justify-center">
                                            <svg className="animate-spin h-5 w-5 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        </div>
                                    </template>
                                    <template x-if="!false">
                                        <span className="flex items-center">
                                            <span>Create a poll</span>
                                        </span>
                                    </template>
                                    <span className="flex items-center">
                                        <span>Create a poll</span>
                                    </span> 
                                </span>
                            </a>
                            <a href="/signup/" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8">
                                Sign up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;