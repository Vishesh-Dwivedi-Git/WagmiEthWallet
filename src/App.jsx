import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { config } from './config';
import WalletOptions from './WalletOptions';
import ShowBalance from './ShowBalance';
import Transaction from './Transaction';

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="app-container">
          <h1 className="app-title">Cryptocurrency Dashboard</h1>
          {/* Components for Wallet Connection and Balance Display */}
          <WalletOptions />
          <ShowBalance />
          <Transaction/>
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
