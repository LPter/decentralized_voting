import { votingContract } from "../web3Provider/web3"

export const handleShowElection = async (publicKey) => {
    try {
        const electionsContract = await votingContract.methods.getAllElections().call()
        const elections = electionsContract.map((election, index) => ({...election, index}))
        const myElectionCreated = elections.filter((election) => election[1] === publicKey)
        const myElectionParticipated = elections.filter(election => election[3].includes(publicKey));
        return { myElectionCreated, myElectionParticipated};
    } catch (error) {
        console.log(error);
    }
}