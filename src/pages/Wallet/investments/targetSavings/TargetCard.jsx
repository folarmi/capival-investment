import React from "react";

const TargetCard = ({ title, value, ifSecondValue, secondValue }) => {
  return (
    <section className="">
      <div
        style={{
          flex: "1 1 0",
        }}
        className="whitespace-nowrap target-bg flex flex-col items-center justify-center w-[180px] h-[140px] text-white rounded-xl px-8  py-6"
      >
        <p className="font-medium text-lg">{title}</p>
        <p className="font-normal text-lg">{value}</p>
        {ifSecondValue && (
          <p className="text-xs font-normal self-end">{secondValue}</p>
        )}
      </div>
    </section>
  );
};

export { TargetCard };
