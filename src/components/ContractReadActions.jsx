import React, { useState } from "react";
import {
  getPredectionCounter,
  getPredectionDetails,
} from "../utils/contractServices";
import { getOwner } from "../utils/contractServices";
import { toast } from "react-toastify";

function ContractReadActions() {
  const [predectionId, setPredictionId] = useState("");

  const handleOwner = async () => {
    try {
      await getOwner();
    } catch (error) {
      toast.error(error?.reason);
    }
  };

  const handlePredectionCounter = async () => {
    try {
      await getPredectionCounter();
    } catch (error) {
      toast.error(error?.reason);
    }
  };

  const handlePredectionDetails = async () => {
    try {
      await getPredectionDetails(predectionId);
    } catch (error) {
      toast.error(error?.reason);
    }
    setPredictionId("");
  };

  return (
    <div>
      <h2>Contract Read Actions</h2>
      <p>
        <button onClick={handleOwner}>Log Owner</button>
      </p>
      <p>
        <button onClick={handlePredectionCounter}>
          Log Predictions Counter
        </button>
      </p>
      <p>
        <button onClick={handlePredectionDetails}>
          Log predictions details
        </button>
        <input
          type="text"
          value={predectionId}
          onChange={(e) => setPredictionId(e.target.value)}
          placeholder="Prediction Id"
        />
      </p>
    </div>
  );
}

export default ContractReadActions;
