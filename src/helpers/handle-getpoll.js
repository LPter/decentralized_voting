import { votingContract } from "../web3Provider/web3"

export const handleGetElection = async (id) => {
    try {
        const election = await votingContract.methods.getElection(id).call();
        console.log(election);
        return election;
    } catch (error) {
        console.log(error);
    }
}