import React, { useState } from "react";
import "./Account";

export default function Account(props) {
  const [buttonHide, setButtonHide] = useState(true);

  const { label, balance } = props.account;
  return (
    <div>
      <h3>{label}</h3>
      <h3>{balance}</h3>
      <button>
        <svg height="20" width="20">
          <path d="M5 0 L15 10 L5 20 Z" />
        </svg>
      </button>
      <div id="acct-bttn-hide">
        <button>Update</button>
        <button>Delete</button>
      </div>
    </div>
  );
}
