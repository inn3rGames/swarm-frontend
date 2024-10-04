import CONTRACT_ABI from "./contract.abi.json";
import { BrowserProvider, Contract, formatEther, parseEther } from "ethers";
import { CONTRACT_ADDRESS } from "./constants";

// Module-level variables to store provider, signer, account, and contract
let provider;
let signer;
let contract;
let account;

// Function to initialize the provider, signer, and contract
const initialize = async () => {
  if (typeof window.ethereum !== "undefined") {
    provider = new BrowserProvider(window.ethereum);
    signer = await provider.getSigner();
    contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
  } else {
    console.error("Please install MetaMask!");
  }
};

// Initialize once when the module is loaded
initialize();

// Function to request single account
export const requestAccount = async () => {
  try {
    const accounts = await provider.send("eth_requestAccounts", []);
    account = accounts[0];
    return accounts[0]; // Return the first account
  } catch (error) {
    console.error("Error requesting account:", error.message);
    return null;
  }
};

// Function to get contract balance in ETH
export const getContractBalanceInETH = async () => {
  const balanceWei = await provider.getBalance(CONTRACT_ADDRESS);
  const balanceEth = formatEther(balanceWei); // Convert Wei to ETH string
  return balanceEth; // Convert ETH string to number
};

// Function to get contract address
export const getContractAddress = () => {
  return CONTRACT_ADDRESS; // Return locally loaded contract address
};

// Function to get user's balance
export const getUserBalance = async () => {
  const userBalance = await provider.getBalance(account);
  const userBalanceInEth = formatEther(userBalance);
  return userBalanceInEth;
};

// Function to get the owner of contract
export const getOwner = async () => {
  const owner = await contract.owner();
  console.log(owner);
};

// Function to get the predection Counter
export const getPredectionCounter = async () => {
  const predictionCounter = await contract.predictionCounter();
  console.log(predictionCounter);
};

// Function to get the predection details
export const getPredectionDetails = async (predectionId) => {
  const predictionDetails = await contract.predictions(predectionId);
  const predictionOptions = await contract.getOptions(predectionId);
  console.log(predictionDetails);
  console.log(predictionOptions);
};

// Function to withdraw balance
export const withdrawBalance = async () => {
  const withdrawBalance = await contract.withdrawBalance();
  console.log(withdrawBalance);
};

// Function to create new prediction
export const createPrediction = async (prediction) => {
  const newPrediction = await contract.createPrediction(
    prediction.title,
    prediction.description,
    [prediction.option1, prediction.option2, prediction.option3],
    prediction.duration
  );
  console.log(newPrediction);
};

// Function to place new bet
export const placeBet = async (bet) => {
  const options = { value: parseEther(bet.ether) };
  const newBet = await contract.placeBet(
    bet.predictionId,
    bet.predictionOption,
    options
  );
  console.log(newBet);
};

// Function to end prediction
export const endPrediction = async (end) => {
  const newPredictionEnd = await contract.endPrediction(
    end.predictionId,
    end.predictionWinningOption
  );
  console.log(newPredictionEnd);
};

// Function to claim payout
export const claimPayout = async (claim) => {
  const newClaim = await contract.claimPayout(claim.predictionId);
  console.log(newClaim);
};
