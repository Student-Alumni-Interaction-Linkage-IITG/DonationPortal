import React from "react";
import VIPBadge from "../../../assets/images/profile-card/VIP Badge.png"
import "./CreditCard.css";

function CreditCard() {
    return (
        <div class="card card--front">
            <div class="card__number">$ 000</div>
            <div class="card__expiry-date">Total Investment</div>
            <hr />
            <div class="card__owner">
                <div>Donate to unlock your badge</div>
                <img src={VIPBadge} alt="" />
            </div>
        </div>
    );
}

export default CreditCard;