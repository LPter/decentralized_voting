import { votingContract } from "../web3Provider/web3"

export const handleSignin = async (publicKey, password) => {
    try {
        const account = await votingContract.methods.login(password).call({from: publicKey});
        console.log("login success");
        return account;
    } catch (error) {
        console.error("Login failed");
        console.error(error);
        throw error;
    }
}
