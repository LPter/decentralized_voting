function ButtonUser( {publicKey} ) {
    return (
        <div className="flex items-center px-4 py-2 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-[#2c3c55] hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <img className="h-8 w-8 rounded-full object-cover mr-2" src={process.env.PUBLIC_URL + '/images/default-avatar.jpg'} alt="Avatar" />
            <div className="truncate">{publicKey?.toString().length > 10 ? `${publicKey?.substring(0, 10)}...` : publicKey}</div>
        </div>
    );
}

export default ButtonUser;