import { votingContract } from "../web3Provider/web3"

export const handleDisableElection = async (publicKey, id) => {
    try {
        const disableElection = await votingContract.methods.disableElection(id).send({from: publicKey, gas: 3000000})
        return disableElection;
    } catch (error) {
        console.log(error);
    }
}