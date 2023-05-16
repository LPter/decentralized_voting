import Footer from "../components/Footer";
import HeaderPage from "../components/HeaderPage";
import { useContext, useState } from "react";
import { handleCreateElection } from "../helpers/handle-createElection";
import AuthContext from "../Auth/AuthProvider";
import AlertDialog from "../components/AlertDialog";

function VotingPage() {
    const { auth } = useContext(AuthContext)
    const [title, setTitle] = useState("");
    const [options, setOptions] = useState(["", ""]);
    const [voters, setVoters] = useState(["", ""]);
    const [isOpen, setIsOpen] = useState(false)

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleOptionChange = (e, index) => {
        const newOptions = [...options];
        newOptions[index] = e.target.value;
        setOptions(newOptions);
    };

    const handleAddOption = () => {
        setOptions([...options, ""]);
    };

    const handleRemoveOption = (index) => {
        const newOptions = [...options];
        newOptions.splice(index, 1);
        setOptions(newOptions);
    };

    const handleVoterChange = (e, index) => {
        const newOptions = [...voters];
        newOptions[index] = e.target.value;
        setVoters(newOptions);
    };

    const handleAddVoter = () => {
        setVoters([...voters, ""]);
    };

    const handleRemoveVoter = (index) => {
        const newOptions = [...voters];
        newOptions.splice(index, 1);
        setVoters(newOptions);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleCreateElection(title, auth, options, voters)
        setIsOpen(!isOpen)
    };

    return ( 
        <>
            <div>
                <HeaderPage />
                <div className="max-w-3xl mx-auto pt-10 pb-12 sm:px-4">

                    <div className="text-center">
                        <h1 className="text-2xl font-bold leading-7 sm:text-3xl sm:truncate text-gray-900 dark:text-gray-100">
                            Create a Poll
                        </h1>
                        <p className="mt-2 text-sm text-gray-500">
                            Complete the below fields to create your poll.
                        </p>
                    </div>
                    
                    <div className="mt-8 px-4 py-5 sm:p-6 box bg-[#1f2937] border-t-[#818cf8] border-t-[4px] rounded-t-[0.375rem] divide-y divide-gray-200 dark:divide-gray-700">
                        <div className="container mx-auto">
                            <form onSubmit={handleSubmit}>
                                <div className="mt-4">
                                <label htmlFor="title" className="block font-medium text-white">
                                    Poll Title
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={title}
                                    onChange={handleTitleChange}
                                    placeholder="Tittle of poll here"
                                    className="inputTag"
                                />
                                </div>
                                <div className="mt-4">
                                <label htmlFor="options" className="block font-medium text-white">
                                    Poll Options
                                </label>
                                {options.map((option, index) => (
                                    <div key={index} className="mt-1 flex">
                                    <input
                                        type="text"
                                        id={`option-${index}`}
                                        name={`option-${index}`}
                                        value={option}
                                        onChange={(e) => handleOptionChange(e, index)}
                                        className="inputTag"
                                        placeholder={`Option ${index + 1}`}
                                    />
                                    {index > 1 && (
                                        <button
                                        type="button"
                                        className="ml-2 text-sm font-medium text-red-500 hover:text-red-700"
                                        onClick={() => handleRemoveOption(index)}
                                        >
                                        Remove
                                        </button>
                                    )}
                                    </div>
                                ))}
                                    <button
                                        type="button"
                                        className="mt-2 text-sm font-medium text-gray-700 underline hover:text-gray-900"
                                        onClick={handleAddOption}
                                    >
                                        Add Option
                                    </button>
                                </div>
                                <div className="mt-4">
                                <label htmlFor="options" className="block font-medium text-white">
                                    Add voters
                                </label>
                                {voters.map((voter, index) => (
                                    <div key={index} className="mt-1 flex">
                                    <input
                                        type="text"
                                        id={`option-${index}`}
                                        name={`option-${index}`}
                                        value={voter}
                                        onChange={(e) => handleVoterChange(e, index)}
                                        className="inputTag"
                                        placeholder={`Voter ${index + 1}`}
                                    />
                                    {index > 1 && (
                                        <button
                                        type="button"
                                        className="ml-2 text-sm font-medium text-red-500 hover:text-red-700"
                                        onClick={() => handleRemoveVoter(index)}
                                        >
                                        Remove
                                        </button>
                                    )}
                                    </div>
                                ))}
                                    <button
                                        type="button"
                                        className="mt-2 text-sm font-medium text-gray-700 underline hover:text-gray-900"
                                        onClick={handleAddVoter}
                                    >
                                        Add voter
                                    </button>
                                </div>
                                <div className="mt-4 text-center">
                                    <button
                                        type="submit"
                                        className="py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Create Poll
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
                <Footer />
            </div> 
            {
                isOpen && (
                    <AlertDialog isOpen={isOpen} setIsOpen={setIsOpen} contentHeader="Create poll successful" content={`Please wait for the poll result`} />
                )
            }
        </>
    );
}

export default VotingPage;