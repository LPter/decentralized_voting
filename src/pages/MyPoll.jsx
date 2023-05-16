import { useEffect, useState } from "react";
import { handleShowElection } from "../helpers/handle-showElection";
import HeaderPage from "../components/HeaderPage"
import Footer from "../components/Footer"
import { AdjustmentsHorizontalIcon, MinusCircleIcon, PlusIcon } from '@heroicons/react/20/solid';
import MenuDropdown from "../components/MenuDropdown";
import { useNavigate, useParams } from "react-router-dom";
import { handleDisableElection } from "../helpers/handle-disable";
import AlertDialog from "../components/AlertDialog";

function MypollPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [myElectionCreated, setMyElectionCreated] = useState([]);
    const [myElectionParticipated, setMyElectionParticipated] = useState([]);
    const [toggleList, setToggleList] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        handleShowElection(id)
            .then((result) => {
                const { myElectionCreated, myElectionParticipated } = result
                setMyElectionCreated(myElectionCreated);
                setMyElectionParticipated(myElectionParticipated);
            })
    }, [isOpen])

    function handleClickDisable(electionId) {
        handleDisableElection(id, electionId)
            .then((result) => {
                if(result) {
                    setIsOpen(!isOpen)
                }
            })
    }

    return (
        <>
            <div>
                <HeaderPage />
                <div className="max-w-3xl mx-auto pt-10 pb-12 sm:px-4">

                    <div className="text-center">
                        <h1 className="text-2xl font-bold leading-7 sm:text-3xl sm:truncate text-gray-900 dark:text-gray-100">
                            Dashboard
                        </h1>
                    </div>

                    <div className="mt-8 px-4 py-5 sm:p-6 box bg-[#1f2937] border-t-[#818cf8] border-t-[4px] rounded-[0.375rem] divide-y divide-gray-200 dark:divide-gray-700">
                        <div className="container mx-auto h-96">
                            
                            <div className="flex justify-between items-center">
                                <div className="primaryButton flex justify-center items-center h-9 w-36 cursor-pointer" onClick={() => navigate("/create/")}>
                                    <PlusIcon className="h-6 w-6" />
                                    <div>Create poll</div>
                                </div>
                                <div>
                                    <MenuDropdown togglList={toggleList} setToggleList={setToggleList} />
                                </div>
                            </div>

                            <div className="mt-3 p-4 sm:p-3 flex text-gray-900 dark:text-white text-sm font-medium">
                                <div className="flex-shrink-0 flex-auto">Polls</div>
                                <div className="flex-shrink-0 w-16 sm:w-32 text-center hidden sm:block">Candidates</div>
                                <div className="flex-shrink-0 w-32 text-center hidden sm:block">Status</div>
                                <div className="flex-shrink-0 w-40 lg:w-16"></div>
                            </div>

                            {
                                toggleList ? (
                                    myElectionCreated.map((item, indexItem) => {
                                        return (
                                            <div key={indexItem} className="flex mt-2 p-4 text-gray-200 bg-[#536f95] rounded-lg hover:bg-[#405879]">
                                                <div className="flex-shrink-0 flex-auto">{item[0]}</div>
                                                <div className="flex-shrink-0 w-16 sm:w-32 text-center hidden sm:block">{item[3].length}</div>
                                                <div className="flex-shrink-0 w-32 mx-auto sm:block flex items-center justify-center">
                                                    <div className="flex justify-center items-center">
                                                        <span className={`text-center rounded-lg ${!item[2] ? "text-green-600 bg-green-200 w-8" : "text-[#6f253bb8] bg-[#cb476eb8] w-16"}`}>
                                                            {
                                                                !item[2] ? "Live" : "Disable"
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex-shrink-0 flex justify-between w-40 lg:w-16">
                                                    <AdjustmentsHorizontalIcon className="w-6 h-6 hover:text-[#818cf8] cursor-pointer" onClick={() => navigate(`/poll/${item.index}`)} />
                                                    <MinusCircleIcon className="w-6 h-6 hover:text-[#782b61] cursor-pointer" onClick={() => handleClickDisable(item.index)}/>
                                                </div>
                                            </div>
                                        )
                                    })
                                ) : (
                                    myElectionParticipated.map((item, indexItem) => {
                                        return (
                                            <div key={indexItem} className="flex mt-2 p-4 text-gray-200 bg-[#536f95] rounded-lg hover:bg-[#405879]">
                                                <div className="flex-shrink-0 flex-auto">{item[0]}</div>
                                                <div className="flex-shrink-0 w-16 sm:w-32 text-center hidden sm:block">{item[3].length}</div>
                                                <div className="flex-shrink-0 w-32 mx-auto sm:block flex items-center justify-center">
                                                    <div className="flex justify-center items-center">
                                                        <span className={`text-center rounded-lg ${!item[2] ? "text-green-600 bg-green-200 w-8" : "text-[#6f253bb8] bg-[#cb476eb8] w-16"}`}>
                                                            {
                                                                !item[2] ? "Live" : "Disable"
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex-shrink-0 flex justify-between w-40 lg:w-16">
                                                    <AdjustmentsHorizontalIcon className="w-6 h-6 hover:text-[#818cf8] cursor-pointer" onClick={() => navigate(`/poll/${item.index}`)} />
                                                </div>
                                            </div>
                                        )
                                    })
                                )
                            }

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            {
                isOpen && <AlertDialog isOpen={isOpen} setIsOpen={setIsOpen} contentHeader="Disable poll successful" content={`Now this election over, you can show result`} />
            }                    
        </>
    );
}

export default MypollPage;