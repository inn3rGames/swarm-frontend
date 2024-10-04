import React, { useState } from "react";
import {
  withdrawBalance,
  createPrediction,
  placeBet,
  endPrediction,
  claimPayout,
} from "../utils/contractServices";

function ContractReadActions() {
  const [prediction, setPrediction] = useState({
    title: "Test",
    description: "Demo",
    option1: "ok1",
    option2: "ok2",
    option3: "ok3",
    duration: "1",
  });

  const [bet, setBet] = useState({
    predictionId: "0",
    predictionOption: "ok2",
    ether: "0.01",
  });

  const [end, setEnd] = useState({
    predictionId: "0",
    predictionWinningOption: "ok2",
  });

  const [claim, setClaim] = useState({
    predictionId: "0",
  });

  const handleWithdraw = async () => {
    try {
      await withdrawBalance();
    } catch (error) {
      console.log(error);
    }
  };

  const handleTitle = (e) => {
    setPrediction({
      ...prediction,
      title: e.target.value,
    });
  };
  const handleDescription = (e) => {
    setPrediction({
      ...prediction,
      description: e.target.value,
    });
  };
  const handleOption1 = (e) => {
    setPrediction({
      ...prediction,
      option1: e.target.value,
    });
  };
  const handleOption2 = (e) => {
    setPrediction({
      ...prediction,
      option2: e.target.value,
    });
  };
  const handleOption3 = (e) => {
    setPrediction({
      ...prediction,
      option3: e.target.value,
    });
  };
  const handleDuration = (e) => {
    setPrediction({
      ...prediction,
      duration: e.target.value,
    });
  };
  const handleNewPrediction = async () => {
    try {
      await createPrediction(prediction);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBetId = (e) => {
    setBet({
      ...bet,
      predictionId: e.target.value,
    });
  };
  const handleBetOption = (e) => {
    setBet({
      ...bet,
      predictionOption: e.target.value,
    });
  };
  const handleBetEther = (e) => {
    setBet({
      ...bet,
      ether: e.target.value,
    });
  };
  const handleNewBet = async () => {
    try {
      await placeBet(bet);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEndId = (e) => {
    setEnd({
      ...end,
      predictionId: e.target.value,
    });
  };
  const handleEndWin = (e) => {
    setEnd({
      ...end,
      predictionWinningOption: e.target.value,
    });
  };
  const handleNewEnd = async () => {
    try {
      await endPrediction(end);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClaimId = (e) => {
    setClaim({
      ...claim,
      predictionId: e.target.value,
    });
  };
  const handleNewClaim = async () => {
    try {
      await claimPayout(claim);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Contract Write Actions</h2>
      <p>
        <button onClick={handleWithdraw}>
          Withdraw Contract's balance to Owner
        </button>
      </p>
      <h3>New Prediction</h3>
      <p>
        <label>
          Title:
          <input value={prediction.title} onChange={handleTitle} />
        </label>
      </p>
      <p>
        <label>
          Description:
          <input value={prediction.description} onChange={handleDescription} />
        </label>
      </p>
      <p>
        <label>
          Option 1:
          <input value={prediction.option1} onChange={handleOption1} />
        </label>
      </p>
      <label>
        Option 2:
        <input value={prediction.option2} onChange={handleOption2} />
      </label>
      <p>
        <label>
          Option 3:
          <input value={prediction.option3} onChange={handleOption3} />
        </label>
      </p>
      <p>
        <label>
          Duration:
          <input value={prediction.duration} onChange={handleDuration} />
        </label>
      </p>
      <p>
        <button onClick={handleNewPrediction}>Create New Prediction</button>
      </p>
      <h3>New Bet</h3>
      <p>
        <label>
          Bet Prediction Id:
          <input value={bet.predictionId} onChange={handleBetId} />
        </label>
      </p>
      <p>
        <label>
          Bet Option:
          <input value={bet.predictionOption} onChange={handleBetOption} />
        </label>
      </p>
      <p>
        <label>
          Bet Ether:
          <input value={bet.ether} onChange={handleBetEther} />
        </label>
      </p>
      <p>
        <button onClick={handleNewBet}>Place New Bet</button>
      </p>
      <h3>End Prediction</h3>
      <p>
        <label>
          End Prediction Id:
          <input value={end.predictionId} onChange={handleEndId} />
        </label>
      </p>
      <p>
        <label>
          End Prediction Winning Option
          <input value={end.predictionWinningOption} onChange={handleEndWin} />
        </label>
      </p>
      <p>
        <button onClick={handleNewEnd}>End Prediction</button>
      </p>
      <h3>Claim Payout</h3>
      <p>
        <label>
          Claim Prediction Id:
          <input value={claim.predictionId} onChange={handleClaimId} />
        </label>
      </p>
      <p>
        <button onClick={handleNewClaim}>Claim</button>
      </p>
    </div>
  );
}

export default ContractReadActions;
