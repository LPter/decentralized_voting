import { web3, votingContract } from "../web3Provider/web3"

export const handleSignup = async (password) => {
    try {
        const newAccount = await web3.eth.personal.newAccount(password);
        const unlocked = await web3.eth.personal.unlockAccount(newAccount, password, 0);
        if (!unlocked) {
            throw new Error("Failed to unlock account");
        }
        const amount = web3.utils.toWei('20', 'ether');

        const txObject = {
            from: "0xCE74495Bf3Cc178bAa0D8a875989241aAd5d0aF2",
            to: newAccount,
            value: amount
        };
        const transaction = await web3.eth.sendTransaction(txObject)

        const registrationResult = await votingContract.methods.register(password).send({ from: newAccount });
        console.log("Registration successful", newAccount);
        console.log(registrationResult);
        return newAccount;
    } catch (error) {
        console.error("Registration failed");
        console.error(error);
        throw error;
    }
}
