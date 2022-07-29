import React from "react";
import { useNavigate } from "react-router-dom";

import { TableHeader, WalletCard } from "../../../components";

const Investments = () => {
  const navigate = useNavigate();

  const data = [
    {
      id: "1",
      target: "N 600,000",
      amountSaved: "N60,000",
      timeLeft: "6 Months",
      assetType: "Fixed Deposit",
    },
    {
      id: "2",
      target: "N 600,000",
      amountSaved: "N60,000",
      timeLeft: "6 Months",
      assetType: "Fixed Deposit",
    },
    {
      id: "3",
      target: "N 600,000",
      amountSaved: "N60,000",
      timeLeft: "6 Months",
      assetType: "Fixed Deposit",
    },
  ];

  const goToSavingsPage = () => {
    navigate("/wallet/investments/new-saving");
  };

  const goToFixedDepositsPage = () => {
    navigate("/wallet/investments/new-fixed-deposits");
  };

  return (
    <div>
      <section className="flex justify-center items-center mt-8">
        <WalletCard
          title="Investments"
          primaryColor="#246362"
          secColor="linear-gradient(165.82deg, #33458D -121.49%, #C06B29 13.24%, #21093A 138.23%)"
          ifAccountName
          cardName="Account Name"
          amount="50,000.25"
        />
      </section>
      {/* bg-blueTwo/20 */}

      <div className="m-auto w-[40%] bg-blueTwo/50 rounded-xl mt-3">
        {/* <img src="/assets/icons/newAsset.svg" alt="new asset" /> */}
        <div className="flex items-center justify-center">
          <svg
            width="218"
            height="35"
            viewBox="0 0 218 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.861816 0.563477H217.828V24.7637C217.828 30.2865 213.351 34.7637 207.828 34.7637H10.8618C5.33897 34.7637 0.861816 30.2865 0.861816 24.7637V0.563477Z"
              fill="#3B58A8"
            />
            <path
              d="M84.7207 8.85693V22.8569H83.0807L74.6807 12.4169V22.8569H72.6807V8.85693H74.3207L82.7207 19.2969V8.85693H84.7207ZM98.2112 17.6169C98.2112 17.7636 98.1978 17.9569 98.1712 18.1969H89.5712C89.6912 19.1303 90.0978 19.8836 90.7912 20.4569C91.4978 21.0169 92.3712 21.2969 93.4112 21.2969C94.6778 21.2969 95.6978 20.8703 96.4712 20.0169L97.5312 21.2569C97.0512 21.8169 96.4512 22.2436 95.7312 22.5369C95.0245 22.8303 94.2312 22.9769 93.3512 22.9769C92.2312 22.9769 91.2378 22.7503 90.3712 22.2969C89.5045 21.8303 88.8312 21.1836 88.3512 20.3569C87.8845 19.5303 87.6512 18.5969 87.6512 17.5569C87.6512 16.5303 87.8778 15.6036 88.3312 14.7769C88.7978 13.9503 89.4312 13.3103 90.2312 12.8569C91.0445 12.3903 91.9578 12.1569 92.9712 12.1569C93.9845 12.1569 94.8845 12.3903 95.6712 12.8569C96.4712 13.3103 97.0912 13.9503 97.5312 14.7769C97.9845 15.6036 98.2112 16.5503 98.2112 17.6169ZM92.9712 13.7769C92.0512 13.7769 91.2778 14.0569 90.6512 14.6169C90.0378 15.1769 89.6778 15.9103 89.5712 16.8169H96.3712C96.2645 15.9236 95.8978 15.1969 95.2712 14.6369C94.6578 14.0636 93.8912 13.7769 92.9712 13.7769ZM116.722 12.2569L112.762 22.8569H110.922L107.862 14.8169L104.762 22.8569H102.922L98.982 12.2569H100.802L103.882 20.6969L107.082 12.2569H108.702L111.842 20.7369L115.002 12.2569H116.722ZM133.241 19.3569H125.801L124.261 22.8569H122.201L128.541 8.85693H130.521L136.881 22.8569H134.781L133.241 19.3569ZM132.541 17.7569L129.521 10.8969L126.501 17.7569H132.541ZM141.632 22.9769C140.765 22.9769 139.932 22.8636 139.132 22.6369C138.332 22.3969 137.705 22.0969 137.252 21.7369L138.052 20.2169C138.519 20.5503 139.085 20.8169 139.752 21.0169C140.419 21.2169 141.092 21.3169 141.772 21.3169C143.452 21.3169 144.292 20.8369 144.292 19.8769C144.292 19.5569 144.179 19.3036 143.952 19.1169C143.725 18.9303 143.439 18.7969 143.092 18.7169C142.759 18.6236 142.279 18.5236 141.652 18.4169C140.799 18.2836 140.099 18.1303 139.552 17.9569C139.019 17.7836 138.559 17.4903 138.172 17.0769C137.785 16.6636 137.592 16.0836 137.592 15.3369C137.592 14.3769 137.992 13.6103 138.792 13.0369C139.592 12.4503 140.665 12.1569 142.012 12.1569C142.719 12.1569 143.425 12.2436 144.132 12.4169C144.839 12.5903 145.419 12.8236 145.872 13.1169L145.052 14.6369C144.185 14.0769 143.165 13.7969 141.992 13.7969C141.179 13.7969 140.559 13.9303 140.132 14.1969C139.705 14.4636 139.492 14.8169 139.492 15.2569C139.492 15.6036 139.612 15.8769 139.852 16.0769C140.092 16.2769 140.385 16.4236 140.732 16.5169C141.092 16.6103 141.592 16.7169 142.232 16.8369C143.085 16.9836 143.772 17.1436 144.292 17.3169C144.825 17.4769 145.279 17.7569 145.652 18.1569C146.025 18.5569 146.212 19.1169 146.212 19.8369C146.212 20.7969 145.799 21.5636 144.972 22.1369C144.159 22.6969 143.045 22.9769 141.632 22.9769ZM151.652 22.9769C150.785 22.9769 149.952 22.8636 149.152 22.6369C148.352 22.3969 147.725 22.0969 147.272 21.7369L148.072 20.2169C148.538 20.5503 149.105 20.8169 149.772 21.0169C150.438 21.2169 151.112 21.3169 151.792 21.3169C153.472 21.3169 154.312 20.8369 154.312 19.8769C154.312 19.5569 154.198 19.3036 153.972 19.1169C153.745 18.9303 153.458 18.7969 153.112 18.7169C152.778 18.6236 152.298 18.5236 151.672 18.4169C150.818 18.2836 150.118 18.1303 149.572 17.9569C149.038 17.7836 148.578 17.4903 148.192 17.0769C147.805 16.6636 147.612 16.0836 147.612 15.3369C147.612 14.3769 148.012 13.6103 148.812 13.0369C149.612 12.4503 150.685 12.1569 152.032 12.1569C152.738 12.1569 153.445 12.2436 154.152 12.4169C154.858 12.5903 155.438 12.8236 155.892 13.1169L155.072 14.6369C154.205 14.0769 153.185 13.7969 152.012 13.7969C151.198 13.7969 150.578 13.9303 150.152 14.1969C149.725 14.4636 149.512 14.8169 149.512 15.2569C149.512 15.6036 149.632 15.8769 149.872 16.0769C150.112 16.2769 150.405 16.4236 150.752 16.5169C151.112 16.6103 151.612 16.7169 152.252 16.8369C153.105 16.9836 153.792 17.1436 154.312 17.3169C154.845 17.4769 155.298 17.7569 155.672 18.1569C156.045 18.5569 156.232 19.1169 156.232 19.8369C156.232 20.7969 155.818 21.5636 154.992 22.1369C154.178 22.6969 153.065 22.9769 151.652 22.9769ZM168.211 17.6169C168.211 17.7636 168.198 17.9569 168.171 18.1969H159.571C159.691 19.1303 160.098 19.8836 160.791 20.4569C161.498 21.0169 162.371 21.2969 163.411 21.2969C164.678 21.2969 165.698 20.8703 166.471 20.0169L167.531 21.2569C167.051 21.8169 166.451 22.2436 165.731 22.5369C165.025 22.8303 164.231 22.9769 163.351 22.9769C162.231 22.9769 161.238 22.7503 160.371 22.2969C159.505 21.8303 158.831 21.1836 158.351 20.3569C157.885 19.5303 157.651 18.5969 157.651 17.5569C157.651 16.5303 157.878 15.6036 158.331 14.7769C158.798 13.9503 159.431 13.3103 160.231 12.8569C161.045 12.3903 161.958 12.1569 162.971 12.1569C163.985 12.1569 164.885 12.3903 165.671 12.8569C166.471 13.3103 167.091 13.9503 167.531 14.7769C167.985 15.6036 168.211 16.5503 168.211 17.6169ZM162.971 13.7769C162.051 13.7769 161.278 14.0569 160.651 14.6169C160.038 15.1769 159.678 15.9103 159.571 16.8169H166.371C166.265 15.9236 165.898 15.1969 165.271 14.6369C164.658 14.0636 163.891 13.7769 162.971 13.7769ZM176.837 22.2369C176.557 22.4769 176.211 22.6636 175.797 22.7969C175.384 22.9169 174.957 22.9769 174.517 22.9769C173.451 22.9769 172.624 22.6903 172.037 22.1169C171.451 21.5436 171.157 20.7236 171.157 19.6569V13.8369H169.357V12.2569H171.157V9.93693H173.077V12.2569H176.117V13.8369H173.077V19.5769C173.077 20.1503 173.217 20.5903 173.497 20.8969C173.791 21.2036 174.204 21.3569 174.737 21.3569C175.324 21.3569 175.824 21.1903 176.237 20.8569L176.837 22.2369Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M49.9203 17.4123H47.1424C46.3754 17.4123 45.7537 16.7906 45.7537 16.0236C45.7537 15.2565 46.3754 14.6348 47.1424 14.6348H49.9203C50.1121 14.6348 50.2676 14.4793 50.2676 14.2875V11.5097C50.2676 10.7426 50.8893 10.1209 51.6564 10.1209C52.4234 10.1209 53.0451 10.7426 53.0451 11.5097V14.2875C53.0451 14.4793 53.2006 14.6348 53.3924 14.6348H56.1703C56.9373 14.6348 57.559 15.2565 57.559 16.0236C57.559 16.7906 56.9373 17.4123 56.1703 17.4123H53.3924C53.2006 17.4123 53.0451 17.5678 53.0451 17.7597V20.5375C53.0451 21.3046 52.4234 21.9263 51.6564 21.9263C50.8893 21.9263 50.2676 21.3046 50.2676 20.5375V17.7597C50.2676 17.5678 50.1121 17.4123 49.9203 17.4123Z"
              fill="white"
            />
            <path
              d="M51.6565 6.30079C57.0259 6.30079 61.3787 10.6537 61.3787 16.023C61.3787 21.3924 57.0259 25.7452 51.6565 25.7452C46.2871 25.7452 41.9343 21.3924 41.9343 16.023C41.9343 10.6537 46.2871 6.30079 51.6565 6.30079ZM51.6565 3.52295C44.753 3.52295 39.1565 9.11955 39.1565 16.0229C39.1565 22.9263 44.7531 28.5229 51.6565 28.5229C58.5599 28.5229 64.1565 22.9263 64.1565 16.0229C64.1565 9.11955 58.5599 3.52295 51.6565 3.52295Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="flex items-center justify-center">
          <p
            className="font-medium text-xl text-blueTwo rounded-2xl bg-white/70 flex items-center justify-center py-2 px-8 my-4 mr-8 cursor-pointer"
            onClick={goToSavingsPage}
          >
            Savings
          </p>
          <p
            className="font-medium text-xl text-blueTwo rounded-2xl bg-white/70 flex items-center justify-center py-2 px-8 my-4 cursor-pointer"
            onClick={goToFixedDepositsPage}
          >
            Fixed Deposits
          </p>
        </div>
      </div>

      <div className="my-8 mx-7">
        <TableHeader header="Active Assets" pageNumber="See all" />

        <main className="bg-blueTwo/10 rounded-xl">
          <section className="bg-blueTwo/20 rounded-xl py-4 pr-[40%] grid grid-cols-4 gap-4">
            <p className="font-medium whitespace-nowrap text-base text-blueTwo pl-6">
              Target
            </p>
            <p className="font-medium whitespace-nowrap text-base text-blueTwo">
              Amount Saved
            </p>
            <p className="font-medium whitespace-nowrap text-base text-blueTwo">
              Time Left
            </p>
            <p className="font-medium whitespace-nowrap text-base text-blueTwo">
              Asset Type
            </p>
          </section>

          {data.map((item) => {
            return (
              <div
                className="w-full grid grid-cols-4 gap-4 mt-4 mb-4 bg-blueTwo/5 py-3 pr-[40%]"
                key={item?.id}
              >
                <p className="text-base text-orange pl-6 font-normal ">
                  {item?.target}
                </p>
                <p className="text-base text-blueTwo font-semibold ">
                  {item?.amountSaved}
                </p>
                <p className="text-base text-blueTwo font-normal ">
                  {item?.timeLeft}
                </p>{" "}
                <p className="text-base text-blueFive font-normal ">
                  {item?.assetType}
                </p>
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
};

export { Investments };
