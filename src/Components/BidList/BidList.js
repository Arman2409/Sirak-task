import React, { useState, useEffect } from "react";
import "./BidList.css";
import { useDispatch, useSelector } from "react-redux";

function BidList() {
  const [bidsState, setBidsState] = useState([]);
  const bids = useSelector(function (state) {  return state.bids.bids})
  console.log(bids)

  return (
    <div className="coints">
      {bids.map((bid, index) => {
        const keys = Object.values(bid);
        return (
          <div key={index}> 
             {keys.map((key, index) => <p key={index}>{key}</p>)}
          </div>
        )
      })}
    </div>
  );
}

export default BidList;