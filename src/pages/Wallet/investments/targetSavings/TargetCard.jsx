import React from "react";

const TargetCard = ({ title, value, ifSecondValue, secondValue }) => {
  return (
    <section className="">
      <div
        style={{
          flex: "1 1 0",
        }}
        className="target-bg flex flex-col items-center justify-center text-white rounded-xl px-8  py-6"
      >
        <p className="font-medium text-xs">{title}</p>
        <p className="font-normal text-xs">{value}</p>
        {ifSecondValue && (
          <p className="text-xs font-normal self-end">{secondValue}</p>
        )}
      </div>
    </section>
  );
};

export { TargetCard };
