const Ethereum = {
  hex: "0x1",
  name: "Ethereum",
  rpcUrl: "",
  ticker: "ETH",
};

const SepoliaTestnet = {
  hex: "0xaa36a7",
  name: "Sepolia Testnet",
  rpcUrl: "https://sepolia.drpc.org",
  ticker: "Sepolia",
};

export const CHAINS_CONFIG = {
  "0x1": Ethereum,
  "0xaa36a7": SepoliaTestnet,
};
