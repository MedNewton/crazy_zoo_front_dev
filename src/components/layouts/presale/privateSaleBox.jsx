import React from "react";
import PropTypes from "prop-types";
import Countdown from "react-countdown";
import { Button } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

const CompletedCountdown = () => {
  <span>You are good to go!</span>;
};

const CountdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return CompletedCountdown;
  } else {
    if (days < 10) days = "0" + days.toString();
    if (hours < 10) days = "0" + days.toString();
    if (minutes < 10) days = "0" + days.toString();
    if (seconds < 10) days = "0" + days.toString();
    return (
      <div className="Countdown">
        <h5>{days}</h5>
        <h5>{hours}</h5>
        <h5>{minutes}</h5>
        <h5>{seconds}</h5>
      </div>
    );
  }
};

const PrivateSaleBox = (props) => {
  const data = props.data;
  console.log(data);
  //const countdownTo = data[0].countdownTo;
  return (
    <div className="privateSaleGlassBox">
      <div className="privateSaleBoxTitleWrapper">Private Sale</div>
      <div className="countdownWrapper">
        <Countdown
          date={Date.now() + data[0].countdownTo}
          renderer={CountdownRenderer}
        />
      </div>
      <div className="mintedProgressBarLabelWrapper">
        <ProgressBar
          min={0}
          max={data[0].privateSaleTo}
          now={data[0].privateSaleFrom}
          id="privateSaleProgressBar"
        />
        <h5 className="privateSaleFrom">
          {data[0].privateSaleFrom.toString()} USDC
          <img
            src="https://assets.coincap.io/assets/icons/usdc@2x.png"
            style={{ height: "1.2em", width: "auto", marginLeft: "2%" }}
            alt=""
          ></img>
        </h5>
        <h5 className="privateSaleTo">
          {data[0].privateSaleTo.toString()} USDC
          <img
            src="https://assets.coincap.io/assets/icons/usdc@2x.png"
            style={{ height: "1.2em", width: "auto", marginLeft: "2%" }}
            alt=""
          ></img>
        </h5>
        <div className="privateSaleInputWrapper">
          <input
            type="number"
            id="privateSaleInput"
            className="privateSaleInput"
            placeholder="0.0"
          />
          <div className="maxswapIn">Max</div>
        </div>
      </div>
      <Button className="swapBtn">
        Buy with USDC
        <img
          src="https://assets.coincap.io/assets/icons/usdc@2x.png"
          style={{ height: "1.2em", width: "auto", marginLeft: "1%" }}
          alt=""
        ></img>
      </Button>
    </div>
  );
};

PrivateSaleBox.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PrivateSaleBox;
