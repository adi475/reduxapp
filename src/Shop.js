import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {actionCreators} from "./State/index"

function Shop() {

const dispatch = useDispatch();
const actions = bindActionCreators(actionCreators , dispatch);


  return (
    <div className="container mt-3 d-flex justify-content-center">
      <div  style={{backgroundColor:"lightcyan" , padding:"25px" , margin:"3px" , borderRadius:"4px"}}>
      <h5 className="mb-2">Deposit/Withdraw Money</h5>
      <button className="btn btn-primary mx-2" onClick={()=>{actions.withdrawMoney(200)}}>-</button>
       Update Balance
      <button className="btn btn-primary mx-2" onClick={()=>{actions.depositMoney(200)}}>+</button>
      </div>
    </div>
  );
}

export default Shop;
