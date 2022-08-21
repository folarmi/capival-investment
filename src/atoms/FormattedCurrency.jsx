import React from "react";
import CurrencyFormat from "react-currency-format";

const FormattedCurrency = ({
  value,
  fontSize = "14px",
  fontWeight = "400",
  fontColor = "A4B5E233",
}) => {
  return (
    <div>
      <p className={`text-${fontSize} font-${fontWeight} text-${fontColor}`}>
        <CurrencyFormat
          value={value}
          displayType={"text"}
          thousandSeparator={true}
          prefix="₦"
        />
      </p>
    </div>
  );
};

export { FormattedCurrency };
