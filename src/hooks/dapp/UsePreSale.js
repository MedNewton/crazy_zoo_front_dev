import { useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi'
import config from '../../config';
import * as abis from '../../abis';


const SetPreSale = (methodName,args, chainId)=>{

  const { config : conf } = usePrepareContractWrite({
    address: `${config.ContractsConfig[chainId].PRESALE}`,
    abi:  abis.PreSale.abi,
    functionName: methodName,
    args,
    enabled:Boolean(methodName && chainId && args)
  })
  const { data, isLoading, isSuccess, write } = useContractWrite(conf)
  return { data, isLoading, isSuccess, write }

}
const GetPreSale = (methodName,chainId,args)=>{
  
  const { data, isError, isLoading } = useContractRead({
    address: `${config.ContractsConfig[chainId].PRESALE}`,
    abi:  abis.PreSale.abi,
    functionName: methodName,
    args,
    enabled:Boolean(methodName && chainId && args)
  })
  return { data, isError, isLoading };
}

export {GetPreSale , SetPreSale };
// https://usedapp-docs.netlify.app/docs/Guides/Migration/to-0.12#usecontractcall-is-getting-replaced-by-useContractCall