//Here all classes have names in the form {cc_classname}

import React from "react";
import VIPBadge from "../../../assets/images/profile-card/VIP Badge.png"
import "./CreditCard.css";

function CreditCard() {
    return (
        <div class="cc_card cc_card--front">
            <div class="cc_card__number">$ 000</div>
            <div class="cc_card__expiry-date">Total Investment</div>
            <hr />
            <div class="cc_card__owner">
                <div>Donate to unlock your badge</div>
                <img src={VIPBadge} alt="" />
            </div>
        </div>
    );
}

export default CreditCard;