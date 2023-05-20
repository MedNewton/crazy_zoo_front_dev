import { useNetworkContracts } from '../../context/hooks';
import { useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi'
import config from '../../config';
import * as abis from '../../abis';


const SetStaking = (methodName,args,chainId)=>{

  const { config : conf } = usePrepareContractWrite({
    address: `${config.ContractsConfig[chainId].ZOOSTAKING}`,
    abi:  abis.CrazyZooStaking.abi,
    functionName: methodName,
    args
  })
  const { data, isLoading, isSuccess, write } = useContractWrite(conf)
  return { data, isLoading, isSuccess, write }

}
const GetStaking = (methodName,chainId,args)=>{
  const { data, isError, isLoading } = useContractRead({
    address: `${config.ContractsConfig[chainId].ZOOSTAKING}`,
    abi: abis.CrazyZooStaking.abi,
    functionName: methodName,
    args
  })
  return { data, isError, isLoading };
}

export {GetStaking , SetStaking };
// https://usedapp-docs.netlify.app/docs/Guides/Migration/to-0.12#usecontractcall-is-getting-replaced-by-useContractCall