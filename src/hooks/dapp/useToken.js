import { useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi'
import * as abis from '../../abis';
import config from '../../config';
import { useNetwork } from 'wagmi'
import {
  useAccount,
} from 'wagmi'


const SetToken = (methodName, args, chainId) => {
  const { config: conf } = usePrepareContractWrite({
    address: `${config.ContractsConfig[chainId].ZOOTOKEN}`,
    abi: abis.CrazyZooToken.abi,
    functionName: methodName,
    args
  })
  const { data, isLoading, isSuccess, write } = useContractWrite(conf)
  return { data, isLoading, isSuccess, write }
}

const GetToken = (methodName, chainId, args) => {
  
  const { data, isError, isLoading } = useContractRead({
    address: `${config.ContractsConfig[chainId].ZOOTOKEN}`,
    abi: abis.CrazyZooToken.abi,
    functionName: methodName,
    args
  })
  return { data, isError, isLoading };

}

export { SetToken , GetToken };
// https://usedapp-docs.netlify.app/docs/Guides/Migration/to-0.12#usecontractcall-is-getting-replaced-by-useContractCall