import ABI from "./abi.json";
import {
  OpenseaSVG,
  EtherscanSVG,
  TwitterSVG,
  DiscordSVG,
} from "./HeaderIcons";


/**
 * ?? replace it with your collection address
 * !! paste your abi in abi.json
 */

export const ContractAddress = {
  address: "0x8E76c71cF8A7FD660B0cc857Bea2957Ff31E29a3",
  abi: ABI,
};


/**
 * ?? 1 for Eth Mainnet, 5 for eth GOERLI
 */
export const contractChainId = 5; 

/**
 * ?? replace it with your collection name since it will show on wallets when connecting
 */
export const CollectionName = "CyberRhinoSquad";




/**
 * ?? Please replace it with your Wallet connect project id or IT WILL SHOW MY WEBSITE INFO
 * ?? https://cloud.walletconnect.com/sign-in
 */
export const projectId = "ea12f987ea5f2430cacb522ebb6a369a";

/**
 * ?? Please replace it with your infura api key or IT WILL OVERLOAD AND WALLET CONNECTION WONT WORK
 * ?? https://app.infura.io/dashboard
 */

export const infuraApiKey = "f49bf19dbf4446a5b13b89c2928f978f";



export const HeaderItems = [
  { name: "Opensea", target: "https://opensea.io", img: <OpenseaSVG /> },
  {
    name: "Etherscan",
    target: `https://etherscan.io/address/${ContractAddress.address}}`,
    img: <EtherscanSVG />,
  },
  { name: "Twitter", target: "https://twitter.com", img: <TwitterSVG /> },
  { name: "Discord", target: "https://discord.com", img: <DiscordSVG /> },
];
