import React from "react";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../App";
import Header from "../components/header/Header";
import DappCommunity from "../components/layouts/home-3/dappCommunity";
import PoolsLayout from "../components/layouts/PoolsLayout";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import leaves5 from "../assets/images/referral/Leaves_05.svg";
import leaves1 from "../assets/images/referral/Leaves_01.svg";
import leaves8 from "../assets/images/minting/Leaves_08.svg";
import leaves7 from "../assets/images/minting/Leaves_07.svg";
import referralRhino from "../assets/images/referral/CrazyZoo_Rhino_V1_2224.png";

import FromSwapModal from "../components/layouts/swapModal";
import ToSwapModal from "../components/layouts/toSwapModal";

import {
  AiOutlineArrowLeft,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import { FiInbox } from "react-icons/fi";

const AddPosition = () => {
  const famrs = [
    {
      id: 0,
      title: "DAI/MAI (Stable)",
      TVL: 477589.125,
      rewards: 1579.472,
      apr: 12.53,
    },
    {
      id: 1,
      title: "DAI/USDT (Stable)",
      TVL: 125589.125,
      rewards: 2385.472,
      apr: 17.14,
    },
    {
      id: 2,
      title: "DAI/GUSD (Stable)",
      TVL: 356127.536,
      rewards: 1254.24,
      apr: 13.74,
    },
    {
      id: 3,
      title: "DAI/MATIC (Stable)",
      TVL: 786127.536,
      rewards: 1854.24,
      apr: 13.64,
    },
    {
      id: 4,
      title: "DAI/BTC (Stable)",
      TVL: 2366127.536,
      rewards: 2854.24,
      apr: 16.41,
    },
    {
      id: 5,
      title: "DAI/USDC (Stable)",
      TVL: 356127.536,
      rewards: 1284.24,
      apr: 10.12,
    },
    {
      id: 6,
      title: "DAI/BOB (Stable)",
      TVL: 26127.536,
      rewards: 854.64,
      apr: 15.69,
    },
    {
      id: 7,
      title: "GUSD/USDT (Stable)",
      TVL: 162127.536,
      rewards: 3454.37,
      apr: 13.21,
    },
    {
      id: 8,
      title: "USDC/GUSD (Stable)",
      TVL: 943127.536,
      rewards: 754.24,
      apr: 32.54,
    },
    {
      id: 9,
      title: "GUSD/MATIC (Stable)",
      TVL: 985127.536,
      rewards: 4837.16,
      apr: 19.57,
    },
  ];

  const [fromCoin, setFromCoin, toCoin, setToCoin] = useContext(UserContext);

  const [swapFromModalShow, setSwapFromModalShow] = useState(false);
  const [swapToModalShow, setSwapToModalShow] = useState(false);

  return (
    <div className="home-3">
      <Header />
      <div className="poolsPageContainer">
        <img src={leaves1} className="referralLeaves1" alt="" />
        <img src={leaves5} className="referralLeaves5" alt="" />
        <img src={leaves8} className="referralLeaves8" alt="" />
        <img src={leaves7} className="referralLeaves7" alt="" />
        <img src={referralRhino} className="referralRhino" alt="" />

        <div
          className="row poolsBoxWrapper centered-axis-x centered-axis-y"
          style={{ width: "60vw" }}
        >
          <div className="row LiquidityTitleBar">
            <Link to={"/pools"}><AiOutlineArrowLeft size={20} color="#fff" /></Link>
            <h5 className="LiquidityTitle">Add Liquidity</h5>
            <h5 className="LiquidityClear">Clear all</h5>
          </div>
          <div className="newPositionDataBox row">
            <div className="col-6 setPairBox">
              <h5 className="rangeTitle">Set Price Range</h5>
              <div className="pairButtonsBox">
                <Button className="pairFromBtn" onClick={() => { setSwapFromModalShow(true) }}>
                  <img src={fromCoin.logo} className="swapCoinLogo" alt="" />
                  {fromCoin.symbol.toString().toUpperCase()}
                </Button>
                <Button className="pairToBtn" onClick={() => { setSwapToModalShow(true) }}>
                  <img src={toCoin.logo} className="swapCoinLogo" alt="" />
                  {toCoin.symbol.toString().toUpperCase()}
                </Button>
              </div>
              <div className="freeTierBox">
                <div className="freeTierTextBox">
                    <h5 className="freeTierText">0.01% free tier</h5>
                    <h5 className="freeTierSpan">0% select</h5>
                </div>
                <Button>Edit</Button>
              </div>
              <h5 className="rangeTitle">Deposit Amount</h5>
              <div className="fromAmountBox">
                <div className="fromAmountInputBox">
                    <input className="minmaxInput fromAmountInput" placeholder="0.00" type="number" style={{border: "none", height: "5%", padding: "2% 3%", color: "#fff"}}/>
                    <h5 className="convertedFromAmount">$150,235.00</h5>
                </div>
                <Button className="pairFromBtn">
                  <img src={fromCoin.logo} className="swapCoinLogo" alt="" />
                  {fromCoin.symbol.toString().toUpperCase()}
                </Button>
              </div>
              <div className="fromAmountBox">
                <div className="fromAmountInputBox">
                    <input className="minmaxInput fromAmountInput" placeholder="0.00" type="number" style={{border: "none", height: "5%", padding: "2% 3%", color: "#fff"}}/>
                    <h5 className="convertedFromAmount">$150,235.00</h5>
                </div>
                <Button className="pairFromBtn">
                  <img src={toCoin.logo} className="swapCoinLogo" alt="" />
                  {toCoin.symbol.toString().toUpperCase()}
                </Button>
              </div>
            </div>
            <div className="col-6 setRangeBox">
              <h5 className="rangeTitle">Set Price Range</h5>
              <div className="positionChartBox">
                <FiInbox size={50} color="#bebebe" />
                <h5 className="positionChartBoxTitle">
                  Your new position will appear here
                </h5>
              </div>
              <div className="minMaxBox row">
                <div className="liquidityMinBox">
                  <h5 className="minmaxBoxTitle">Min Price</h5>
                  <div className="minBox">
                    <Button>
                      <AiOutlineMinus size={12} color="#020202" />
                    </Button>
                    <input className="minmaxInput" type="text" />
                    <Button>
                      <AiOutlinePlus size={12} color="#020202" />
                    </Button>
                  </div>
                  <h5 className="minmaxBoxCoins">{fromCoin.symbol.toString().toUpperCase()} per {toCoin.symbol.toString().toUpperCase()}</h5>
                </div>
                <div className="liquidityMaxBox">
                  <h5 className="minmaxBoxTitle">Max Price</h5>
                  <div className="maxBox">
                    <Button>
                      <AiOutlineMinus size={12} color="#020202" />
                    </Button>
                    <input className="minmaxInput" type="text" />
                    <Button>
                      <AiOutlinePlus size={12} color="#020202" />
                    </Button>
                  </div>
                  <h5 className="minmaxBoxCoins">{fromCoin.symbol.toString().toUpperCase()} per {toCoin.symbol.toString().toUpperCase()}</h5>
                </div>
              </div>
              <div className="fullRangeBtnBox">
                <Button className="fullRangeBtn">Full Range</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DappCommunity />
      <FromSwapModal
        show={swapFromModalShow}
        onHide={() => {
          setSwapFromModalShow(false);
        }}
      ></FromSwapModal>
      <ToSwapModal
        show={swapToModalShow}
        onHide={() => {
          setSwapToModalShow(false);
        }}
      ></ToSwapModal>
    </div>
  );
};

export default AddPosition;
