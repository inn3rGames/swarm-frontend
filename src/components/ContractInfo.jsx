import React, { useEffect, useState } from "react";
import {
  getContractBalanceInETH,
  getContractAddress,
  getUserBalance,
} from "../utils/contractServices";

function ContractInfo({ account }) {
  const [balance, setBalance] = useState(null);
  const [contractAddress, setContractAddress] = useState(null);
  const [userBalance, setUserBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      const balanceInETH = await getContractBalanceInETH();
      setBalance(balanceInETH);
    };
    fetchBalance();

    const fetchContractAdress = () => {
      const contractAddress = getContractAddress();
      setContractAddress(contractAddress);
    };
    fetchContractAdress();

    const fetchUserBalance = async () => {
      const userBalanceInETH = await getUserBalance();
      setUserBalance(userBalanceInETH);
    };
    fetchUserBalance();
  }, []);

  return (
    <div>
      <h2>Info</h2>
      <p>
        Connected Account: <b>{account}</b>
      </p>
      <p>
        User's Balance: <b>{userBalance}</b>
      </p>
      <p>
        Contract Balance: <b>{balance}</b> ETH
      </p>
      <p>
        Contract Address: <b>{contractAddress}</b>
      </p>
    </div>
  );
}

export default ContractInfo;
