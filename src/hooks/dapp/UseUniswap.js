import { useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi'
import * as abis from '../../abis';
import config from '../../config';
import { useNetwork } from 'wagmi'
import {
  useAccount,
} from 'wagmi'

const SetUniswapIntermediary = (methodName,args, chainId)=>{
  
  const { config: conf } = usePrepareContractWrite({
    address: `${config.ContractsConfig[chainId].UNISWAPINTERMEDIARY}`,
    abi:  abis.UniswapIntermediary.abi,
    functionName: methodName,
    args,
    enabled:Boolean(methodName && chainId && args)
  })
  const { data, isLoading, isSuccess, write } = useContractWrite(conf)
  return { data, isLoading, isSuccess, write }

}

const GetUniswapIntermediary = (methodName,args, chainID)=>{

  const { data, isError, isLoading } = useContractRead({
    address:`${config.ContractsConfig[chainID].UNISWAPINTERMEDIARY}`,
    abi: abis.UniswapIntermediary.abi,
    functionName: methodName,
    args,
    enabled:Boolean(methodName && chainID && args)
  })
  return { data, isError, isLoading };
}


export {GetUniswapIntermediary , SetUniswapIntermediary };
// https://usedapp-docs.netlify.app/docs/Guides/Migration/to-0.12#usecontractcall-is-getting-replaced-by-useContractCall