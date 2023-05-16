import { useParams } from "react-router-dom";
import HeaderPage from "../components/HeaderPage";
import Footer from "../components/Footer";
import ButtonUser from "../components/ButtonUser";
import { useEffect, useState } from "react";
import { ChartBarIcon } from '@heroicons/react/20/solid';
// import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { handleGetElection } from "../helpers/handle-getpoll";
import { handleVoting } from "../helpers/handle-voting";
import AlertDialog from "../components/AlertDialog";

ChartJS.register(ArcElement, Tooltip, Legend);

function PollPage() {
    const {id} = useParams()
    
    const [options, setOptions] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [election, setElection] = useState({});
    const [seletedOption, setSelectedOption] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        handleGetElection(id)
            .then((result) => {
                setElection(result)
                setOptions(result.optionNames)
            })
    }, [])

    const data = {
        labels: election.optionNames,
        datasets: [
          {
            label: '# of Votes',
            data: election.optionVotes,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
    };

    const option = {
        maintainAspectRatio: false,
    };
    
    function handleClickVoting() {
        handleVoting(id, seletedOption, election.creator)
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
                        <div className="mt-8 px-4 py-5 sm:p-6 box bg-[#1f2937] border-t-[#818cf8] border-t-[4px] rounded-[0.375rem] divide-y divide-gray-200 dark:divide-gray-700">
                            <div className="container mx-auto">
                                <h1 className="text-2xl text-gray-900 dark:text-gray-200 font-semibold mb-4">{`My poll voting  ${id}`}</h1>
                                <div className="flex items-center text-gray-500">
                                    <span className="mr-4">Create by</span>
                                    <ButtonUser publicKey={election?.creator} />
                                </div>
                                
                                {!showResult ? (
                                    <div className="text-gray-500 mt-8">
                                        <span>Make a choice: </span>
                                        <div className="flex flex-col" onChange={(event) => setSelectedOption(event.target.value)}>
                                            {options.map((option, index) => (
                                                <label
                                                key={index}
                                                className="inline-flex items-center mt-10"
                                                >
                                                    <input
                                                        type="radio"
                                                        className="h-4 w-4 text-gray-600 mr-2"
                                                        id={option}
                                                        name='poll'
                                                        value={option}
                                                    />
                                                    <span className="text-xl ml-2 text-gray-200 leading-4">{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-gray-500 mt-8">
                                        <Pie className="w-80 h-80" data={data} options={option}/>
                                    </div>
                                )}

                                <div className="flex items-center space-x-4 mt-8">
                                    <button className={`w-40 primaryButton button text-sm custom-button px-8 ${showResult && 'hidden'}`} 
                                            onClick={handleClickVoting}>
                                        <span>Vote</span>
                                    </button>
                            
                                    <button className="w-40 button primaryButtonSecond custom-field-input flex items-center" onClick={() =>setShowResult(!showResult)}>
                                        <ChartBarIcon className="w-4 h-4" />
                                        <span>{`${showResult ? 'Hide' : 'Show'} result`}</span>
                                    </button>
                                </div>

                            </div>
                        </div>                  
                    </div>
                <Footer />
            </div>
            {
                isOpen && (
                    <AlertDialog isOpen={isOpen} setIsOpen={setIsOpen} contentHeader="Vote successful" content={`This is poll result`} />
                )
            }                        
        </>
    );
}

export default PollPage;