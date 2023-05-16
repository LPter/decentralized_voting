// import fs from "fs";
const Web3 = require("web3");
const data = require('../build/contracts/VotingApp.json');

const provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
const web3 = new Web3(provider);

const contractAddress = "0x2beaAC61e8637cdE0e2ad8D90287b939A556d4c3";

const votingContract = new web3.eth.Contract(data.abi, contractAddress);

module.exports = {
    web3,
    votingContract,
  };