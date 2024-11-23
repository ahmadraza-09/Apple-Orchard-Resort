import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/payment.css";
import UPI from "../assets/upi.jpeg";

const Payment = () => {
  const navigate = useNavigate();
  return (
    <div className="payment-section">
      <div className="payment-section-right swipe">
        <h2>Bank Account Deatils</h2>

        <div className="bank-details">
          <p className="payment-note">
            <span>IMPORTANT NOTICE:</span> Payments should only be made using
            the official account number and scanner provided above. We do not
            accept cash deposits or physical payments in any form. The company
            is not responsible for any payments made to other accounts, other
            scanners, or any cash given to individuals. Please ensure all
            payments are directed through the official account and scanner only.
          </p>
          <div className="bank-details-left">
            <h3>HDFC Bank Account Details</h3>

            <ul>
              <li>
                <span>Account Holder Name:</span>
                Royal Collection Hotels & Resorts Pvt. Ltd.
              </li>
              <li>
                <span>Bank Details:</span>
                Upper ground floor ,15 Sector - 17, C/8 , Dwarka New Delhi – 11070
              </li>
              <li>
                <span>Account No. :</span>
                50200063541019
              </li>
              <li>
                <span>IFSC Code:</span>
                HDFC0004751
              </li>
              <li>
                <span>Branch Code:</span>
                4751
              </li>
              <li></li>
            </ul>
          </div>
          
        </div>
      </div>
      <div className="payment-section-left swipe-left">
        <img src={UPI} alt="" />
      </div>
      
    </div>
  );
};

export default Payment;
