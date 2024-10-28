import React from 'react';
import { useAccount, useBalance, useDisconnect } from "wagmi";

const ShowBalance = () => {
  const { address, isConnected } = useAccount(); // Check if the user is connected
  const { disconnect } = useDisconnect();

  // Use useBalance to fetch balance
  const { data: balanceData, isLoading, error } = useBalance({ address });

  return (
    <div className="balance-display">
      {isConnected ? (
        <div>
          <h2>Your Wallet Information</h2>
          <p>Your Address: {address}</p>
          {isLoading ? (
            <p>Loading balance...</p>
          ) : error ? (
            <p>Error fetching balance: {error.message}</p>
          ) : (
            <p>Your Balance: {balanceData?.formatted} {balanceData?.symbol}</p>
          )}
          <button onClick={() => disconnect()}>Disconnect</button>
        </div>
      ) : (
        <p>Please connect your wallet to view balance.</p>
      )}
    </div>
  );
}

export default ShowBalance;
