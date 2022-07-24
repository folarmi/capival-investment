import React from "react";

const WalletCard = ({
  title,
  cardName,
  amount,
  onClick,
  secColor,
  ifAccountName = false,
}) => {
  return (
    <div
      className="rounded-lg mr-4 w-[33%] wallet-bg cursor-pointer"
      onClick={onClick}
      style={
        {
          // backgroundColor: primaryColor,
        }
      }
    >
      <div
        className="mt-4 mx-4 rounded-xl"
        style={{
          backgroundColor: secColor,
        }}
      >
        <p className="uppercase text-white font-medium text-xl text-center py-4">
          {title}
        </p>
      </div>

      <section className="my-10">
        {ifAccountName && (
          <p className="text-white font-medium text-xl text-center">
            {cardName}
          </p>
        )}
        <p className="text-white font-medium text-4xl text-center">₦{amount}</p>
      </section>
    </div>
  );
};

export { WalletCard };
