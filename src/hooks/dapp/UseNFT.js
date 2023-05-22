import { useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi'
import config from '../../config';
import * as abis from '../../abis';


const SetNFT = (methodName,args, chainId)=>{
  const { config : conf } = usePrepareContractWrite({
    address: `${config.ContractsConfig[chainId].ZOONFT}`,
    abi:  abis.CrazyZooNFT.abi,
    functionName: methodName,
    args,
    enabled:Boolean(args)
  })
  const { data, isLoading, isSuccess, write } = useContractWrite(conf)
  return { data, isLoading, isSuccess, write }

}
const GetNFT = (methodName,chainId,args)=>{
  const { data, isError, isLoading } = useContractRead({
    address: `${config.ContractsConfig[chainId].ZOONFT}`,
    abi: abis.CrazyZooNFT.abi,
    functionName: methodName,
    args,
    enabled:Boolean(methodName && chainId && args)
  })
  return { data, isError, isLoading };
}

export {GetNFT , SetNFT };
// https://usedapp-docs.netlify.app/docs/Guides/Migration/to-0.12#usecontractcall-is-getting-replaced-by-useContractCall