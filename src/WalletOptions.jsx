import React from 'react'
import {useConnect} from 'wagmi'

const WalletOptions = () => {
    const {connectors , connect} =useConnect();

  return (
    <div className='wallet-options'>

  {connectors.map((connector)=>(
    <button key={connector.uid} onClick={()=>connect({connector})}>
        {connector.name}
    </button>
   ))}
   </div>
  )
}

export default WalletOptions;
