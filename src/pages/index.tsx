import { type GetServerSideProps, type NextPage } from "next";
import { type IHome } from "@/models";
import CryptoTab from "@/components/CryptoTab";
import HomeMeta from "@/components/HomeMeta";
import { getCryptoInfo } from "@/queries";

const Home: NextPage<IHome> = ({ bitcoinValue, cryptoCurr, cryptoVal }) => {
  return (
    <>
      <HomeMeta />
      <main className="flex min-h-screen">
        <div className="container px-4 py-16">
          <h1 className="font-bold tracking-tight sm:text-[3rem]">
            Il valore di Bitcoin è $ {bitcoinValue}
          </h1>
          <p className="mt-2 mb-4">La cryptovaluta con maggior Market Cap dopo Bitcoin è {cryptoCurr} con valore $ {cryptoVal}</p>
          <CryptoTab />
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  bitcoinValue: IHome["bitcoinValue"],
  cryptoCurr: IHome["cryptoCurr"],
  cryptoVal: IHome["cryptoVal"],
}> = async () => {

  const res = await getCryptoInfo();
  const response = res?.data;

  const bitcoinValue = response![0]?.quote.USD.price.toFixed(2)

  const cryptoCurr = response![1]?.name;
  const cryptoVal = response![1]?.quote.USD.price.toFixed(2)

  return {
    props: {
      bitcoinValue,
      cryptoCurr,
      cryptoVal,
    },
  };
};

export default Home;
