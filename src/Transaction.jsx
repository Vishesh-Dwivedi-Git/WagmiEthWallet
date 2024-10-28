import { useSendTransaction } from "wagmi";
import { parseEther } from "viem";
import React, { useState } from 'react';

const Transaction = () => {
  const { data: hash, sendTransaction, isLoading, error } = useSendTransaction();
  const [to, setTo] = useState('');
  const [amt, setAmt] = useState('');

  async function sendTx() {
    if (!to || !amt) {
      alert("Please fill in both fields.");
      return;
    }
    try {
      const txHash = await sendTransaction({
        to,
        value: parseEther(amt),
      });
      console.log("Transaction sent:", txHash);
    } catch (err) {
      console.error("Transaction failed:", err);
    }
  }

  return (
    <div>
      <h2>Send Transaction</h2>
      <input
        placeholder="Enter the address to send"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        id="to"
      />
      <input
        placeholder="Enter the Amount"
        type="number" // Changed to number for better UX
        value={amt}
        onChange={(e) => setAmt(e.target.value)}
        id="amt"
      />
      <button id="sent" onClick={sendTx} disabled={isLoading}>
        {isLoading ? "Sending..." : "Send"}
      </button>
      {hash && <p>Transaction sent! Hash: {hash}</p>}
      {error && <p>Error sending transaction: {error.message}</p>}
    </div>
  );
};

export default Transaction;
