const WebSocket = require("ws");
const BlocknativeSdk = require("bnc-sdk");
const Web3 = require("web3");

const wsapi_url = "wss://api.blocknative.com/v0";

const web3 = new Web3(wsapi_url);

// create options object
const options = {
  dappId: "cf2e2f60-da99-4c31-984f-21855194d264",
  ws: WebSocket,
  transactionHandlers: [(event) => console.log(event.transaction)],
  networkId: 1,
  onerror: (error) => {
    console.log(error);
  },
};

// initialize and connect to the api
const blocknative = new BlocknativeSdk(options);

console.log("started");

const address = "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45";

const { emitter, details } = blocknative.account(address);

emitter.on("all", (transaction) => {
  console.log(transaction);
});
