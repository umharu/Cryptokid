const CrossSpaceCallAbi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes20",
                name: "sender",
                type: "bytes20",
            },
            {
                indexed: true,
                internalType: "bytes20",
                name: "receiver",
                type: "bytes20",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "nonce",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "Call",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes20",
                name: "sender",
                type: "bytes20",
            },
            {
                indexed: true,
                internalType: "bytes20",
                name: "contract_address",
                type: "bytes20",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "nonce",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "init",
                type: "bytes",
            },
        ],
        name: "Create",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bool",
                name: "success",
                type: "bool",
            },
        ],
        name: "Outcome",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes20",
                name: "sender",
                type: "bytes20",
            },
            {
                indexed: true,
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "nonce",
                type: "uint256",
            },
        ],
        name: "Withdraw",
        type: "event",
    },
    {
        inputs: [{ internalType: "bytes", name: "init", type: "bytes" }],
        name: "createEVM",
        outputs: [{ internalType: "bytes20", name: "", type: "bytes20" }],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [{ internalType: "bytes20", name: "to", type: "bytes20" }],
        name: "transferEVM",
        outputs: [{ internalType: "bytes", name: "output", type: "bytes" }],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "bytes20", name: "to", type: "bytes20" },
            { internalType: "bytes", name: "data", type: "bytes" },
        ],
        name: "callEVM",
        outputs: [{ internalType: "bytes", name: "output", type: "bytes" }],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "bytes20", name: "to", type: "bytes20" },
            { internalType: "bytes", name: "data", type: "bytes" },
        ],
        name: "staticCallEVM",
        outputs: [{ internalType: "bytes", name: "output", type: "bytes" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "deployEip1820",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
        name: "withdrawFromMapped",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "addr", type: "address" }],
        name: "mappedBalance",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "addr", type: "address" }],
        name: "mappedNonce",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
];

export default CrossSpaceCallAbi;
