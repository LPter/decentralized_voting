import { votingContract } from "../web3Provider/web3"

export const handleCreateElection = async (name, auth, options, voters) => {
    try {
        const election = await votingContract.methods.createElection(name, options).send({from: auth, gas: 3000000})
        if (election) {
            console.log("create election success");
            console.log(election);
        }
        const allElections = await votingContract.methods.getAllElections().call()
        const electionId = allElections.length-1

        voters.forEach( async (voter) => {
            await votingContract.methods.addVoters(electionId, voter).send({from: auth, gas: 3000000})
        })
    } catch (error) {
        console.log(error);
    }
}