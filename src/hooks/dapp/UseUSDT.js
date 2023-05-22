import * as abis from '../../abis';
import config from '../../config';
import { useNetwork } from 'wagmi'
import { useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi'
import {
  useAccount,
} from 'wagmi'


const SetUSDT = (methodName,args,chainId)=>{
  
  const { config: conf } = usePrepareContractWrite({
    address:`${config.ContractsConfig[chainId].USDC}`,
    abi: abis.USDT.abi,
    functionName: methodName,
    args,
    enabled:Boolean(methodName && chainId && args)
  })
  const { data, isLoading, isSuccess, write } = useContractWrite(conf)
  return { data, isLoading, isSuccess, write }

}



const GetUSDT = (methodName,args, chainId)=>{
  const { data, isError, isLoading } = useContractRead({
    address:`${config.ContractsConfig[chainId].USDC}`,
    abi: abis.USDT.abi,
    functionName: methodName,
    args 
  })
  return { data, isError, isLoading };
}

export { GetUSDT , SetUSDT };
// https://usedapp-docs.netlify.app/docs/Guides/Migration/to-0.12#usecontractcall-is-getting-replaced-by-useContractCall