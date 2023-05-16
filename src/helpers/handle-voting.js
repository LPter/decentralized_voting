import { votingContract } from "../web3Provider/web3"

export const handleVoting = async (electionId, option, publicKey) => {
    try {
        const voting = await votingContract.methods
            .vote(electionId, option)
            .send({ from: publicKey, gas: 3000000 })
        return voting;
        
    } catch (error) {
        console.log(error);
    }
}