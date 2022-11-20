import React from "react";
import CurrencyFormat from "react-currency-format";

const TargetCard = ({
  title,
  value,
  ifSecondValue,
  secondValue,
  ifAmount = true,
}) => {
  return (
    <section className="">
      <div
        style={{
          flex: "1 1 0",
        }}
        className="whitespace-nowrap target-bg flex flex-col items-center justify-center w-[180px] h-[140px] text-white rounded-xl px-8  py-6"
      >
        <p className="font-medium text-lg">{title}</p>
        {!ifAmount && <p className="font-normal text-lg">{value}</p>}
        {ifAmount && (
          <p className="text-center">
            <CurrencyFormat
              style={{
                backgroundColor: "3B58A8",
              }}
              displayType={"input"}
              thousandSeparator={true}
              // min={min}
              value={value}
              prefix={"₦"}
            />
          </p>
        )}

        {ifSecondValue && (
          <p className="text-xs font-normal self-end">{secondValue}</p>
        )}
      </div>
    </section>
  );
};

export { TargetCard };
