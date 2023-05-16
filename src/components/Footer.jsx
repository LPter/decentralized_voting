function Footer() {
    return ( 
        <footer className="bg-gray-100 dark:bg-gray-800  border-t border-gray-300 dark:border-gray-700 custom-border" aria-labelledby="footer-heading" x-data="footer()">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8">                        
                <div className="mt-12 border-t border-gray-300 dark:border-gray-600 py-8">
                    <p className="text-base text-gray-600 dark:text-gray-400 xl:text-center">
                        © 2022 StrawPoll. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;